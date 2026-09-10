/* Corporate Team Building — recolha de leads B2B.
 *
 * POST multipart/form-data ou urlencoded a partir de /team-building/ e /en/team-building/.
 *
 * Comportamento:
 *  - honeypot ("website") + rate-limit básico por IP
 *  - valida campos obrigatórios (name, company, email)
 *  - gera lead_id e regista SEMPRE uma linha JSON nos logs do Cloudflare
 *    (Workers → Logs) — assim nenhum lead se perde mesmo sem email configurado
 *  - se RESEND_API_KEY existir: envia email estruturado para o owner e
 *    um autoreply ao lead
 *  - resposta: JSON quando Accept: application/json; caso contrário 303 para
 *    a página de agradecimento no idioma certo
 *
 * Variáveis de ambiente (Cloudflare Pages → Settings → Environment variables):
 *  - RESEND_API_KEY        (opcional; sem ela o formulário faz fallback para mailto no cliente)
 *  - LEAD_NOTIFY_TO        (opcional; default "voxlaci@gmail.com")
 *  - LEAD_FROM             (opcional; default "Team Building <no-reply@myguelcastro.com>") — tem de ser um domínio verificado no Resend
 *  - LEAD_AUTOREPLY        (opcional; "off" desliga o email de confirmação ao lead)
 */

const RATE_LIMIT = 4;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const rateLimiter = new Map();

export async function onRequestGet({ request }) {
  return Response.redirect(new URL("/team-building/", request.url), 303);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const base = new URL(request.url);
  const wantsJson = (request.headers.get("Accept") || "").includes("application/json");
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";

  const lead_id = generateId();
  const created_at = new Date().toISOString();

  const ok = (langHint) => {
    if (wantsJson) {
      return json({ ok: true, lead_id }, 200);
    }
    const path = langHint === "en" ? "/en/team-building/thank-you/" : "/team-building/obrigado/";
    return Response.redirect(new URL(path, base), 303);
  };
  const fail = (status, msg) =>
    wantsJson ? json({ ok: false, error: msg }, status) : new Response(msg, { status });

  // ── rate limit ────────────────────────────────────────────────
  if (!checkRateLimit(ip)) {
    console.warn(`[team-building-lead] rate-limit IP=${ip}`);
    return fail(429, "Demasiados pedidos. Tente novamente mais tarde ou escreva para voxlaci@gmail.com.");
  }

  let fd;
  try {
    fd = await request.formData();
  } catch {
    return fail(400, "Pedido inválido.");
  }

  // ── honeypot ──────────────────────────────────────────────────
  if (s(fd.get("website")) || s(fd.get("campo-secreto"))) {
    console.info(`[team-building-lead] honeypot IP=${ip}`);
    return ok(s(fd.get("page_lang")));
  }

  const lead = {
    lead_id,
    created_at,
    name: s(fd.get("name")),
    company: s(fd.get("company")),
    role: s(fd.get("role")),
    email: s(fd.get("email")).toLowerCase(),
    phone: s(fd.get("phone")),
    participants: s(fd.get("participants")),
    requested_date: s(fd.get("requested_date")),
    city: s(fd.get("city")),
    duration: s(fd.get("duration")),
    language: s(fd.get("language")),
    objective: s(fd.get("objective")),
    message: s(fd.get("message"), 4000),
    source: s(fd.get("source")) || "team-building",
    page_lang: s(fd.get("page_lang")) || "pt",
    utm_source: s(fd.get("utm_source")),
    utm_medium: s(fd.get("utm_medium")),
    utm_campaign: s(fd.get("utm_campaign")),
    referrer: s(fd.get("referrer"), 300),
    status: "NEW",
    ip,
    user_agent: s(request.headers.get("User-Agent"), 300),
  };

  if (!lead.name || !lead.company || !lead.email || lead.email.indexOf("@") < 1) {
    return fail(422, "Campos obrigatórios em falta: nome, empresa e email.");
  }

  // ── registo estruturado (recuperável a partir dos logs) ───────
  console.info(`[team-building-lead] LEAD ${JSON.stringify(lead)}`);

  // ── email (opcional) ─────────────────────────────────────────
  const apiKey = env.RESEND_API_KEY;
  if (apiKey) {
    const notifyTo = env.LEAD_NOTIFY_TO || "voxlaci@gmail.com";
    const from = env.LEAD_FROM || "Team Building <no-reply@myguelcastro.com>";
    try {
      await sendEmail(apiKey, {
        from,
        to: [notifyTo],
        reply_to: lead.email,
        subject: `[Team Building] ${lead.company} · ${lead.participants || "?"} pax · ${lead.duration || "duração?"} (${lead_id})`,
        html: internalHtml(lead),
      });
      console.info(`[team-building-lead] ${lead_id} email interno enviado → ${notifyTo}`);
    } catch (err) {
      console.error(`[team-building-lead] ${lead_id} email interno FALHOU: ${err.message}`);
      // o lead já está nos logs — não bloqueia a resposta ao utilizador
    }

    if ((env.LEAD_AUTOREPLY || "on") !== "off") {
      try {
        await sendEmail(apiKey, {
          from,
          to: [lead.email],
          reply_to: notifyTo,
          subject: lead.page_lang === "en"
            ? "We received your team building request"
            : "Recebemos o seu pedido de proposta — Team Building",
          html: autoreplyHtml(lead),
        });
      } catch (err) {
        console.error(`[team-building-lead] ${lead_id} autoreply FALHOU: ${err.message}`);
      }
    }
  } else {
    console.warn(`[team-building-lead] ${lead_id} RESEND_API_KEY ausente — lead só registado nos logs`);
    if (wantsJson) {
      // deixa o cliente cair no fallback mailto para garantia total
      return json({ ok: false, error: "email-not-configured", lead_id }, 503);
    }
  }

  return ok(lead.page_lang);
}

// ── helpers ────────────────────────────────────────────────────

function s(v, max = 500) {
  return (v == null ? "" : String(v)).replace(/\s+/g, " ").trim().slice(0, max);
}

function esc(v) {
  return String(v).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function generateId() {
  const d = new Date();
  const p = (n, l = 2) => String(n).padStart(l, "0");
  const stamp = `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}${p(d.getUTCSeconds())}`;
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TB-${stamp}-${rnd}`;
}

function checkRateLimit(ip) {
  const now = Date.now();
  const e = rateLimiter.get(ip);
  if (!e || now - e.start > RATE_WINDOW_MS) {
    rateLimiter.set(ip, { start: now, count: 1 });
    return true;
  }
  if (e.count >= RATE_LIMIT) return false;
  e.count++;
  return true;
}

function row(label, value) {
  return `<tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:700;width:38%;vertical-align:top">${esc(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${esc(value || "—")}</td></tr>`;
}

function internalHtml(l) {
  return `<div style="font-family:system-ui,sans-serif;max-width:680px;margin:0 auto">
  <h2 style="margin:0 0 4px;color:#171412">Novo pedido de proposta — Corporate Team Building</h2>
  <p style="color:#888;font-size:13px;margin:0 0 18px">${esc(l.lead_id)} · ${esc(l.created_at)}</p>
  <table style="width:100%;border-collapse:collapse;font-size:14px">
    ${row("Nome", l.name)}
    ${row("Empresa", l.company)}
    ${row("Cargo", l.role)}
    ${row("Email", l.email)}
    ${row("Telefone", l.phone)}
    ${row("Participantes", l.participants)}
    ${row("Data pretendida", l.requested_date)}
    ${row("Cidade / local", l.city)}
    ${row("Duração", l.duration)}
    ${row("Idioma", l.language)}
    ${row("Objetivo principal", l.objective)}
    ${row("Mensagem", l.message)}
    ${row("Origem", l.source)}
    ${row("UTM", [l.utm_source, l.utm_medium, l.utm_campaign].filter(Boolean).join(" / "))}
    ${row("Referrer", l.referrer)}
  </table>
  <p style="font-size:12px;color:#aaa;border-top:1px solid #eee;padding-top:12px;margin-top:16px">Responda diretamente a este email para falar com ${esc(l.name)} (${esc(l.email)}).</p>
</div>`;
}

function autoreplyHtml(l) {
  const en = l.page_lang === "en";
  return `<div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto">
  <h2 style="margin:0 0 12px;color:#171412">${en ? "Thank you — request received" : "Obrigado — pedido recebido"}</h2>
  <p>${en ? `Hello ${esc(l.name)},` : `Olá ${esc(l.name)},`}</p>
  <p>${en
    ? `We received your request for a corporate team building proposal for <b>${esc(l.company)}</b>. Myguel Santos e Castro will reply personally, usually within 24 to 48 working hours, with a recommended format and a tailored proposal.`
    : `Recebemos o seu pedido de proposta de corporate team building para a <b>${esc(l.company)}</b>. Myguel Santos e Castro responderá pessoalmente, normalmente em 24 a 48 horas úteis, com uma recomendação de formato e uma proposta à medida.`}</p>
  <p>${en ? "Reference:" : "Referência:"} <b>${esc(l.lead_id)}</b></p>
  <p style="margin-top:24px"><b>Myguel Santos e Castro</b><br>${en ? "Conductor and Artistic Director" : "Maestro e Diretor Artístico"} — VoxLaci<br>
  <a href="https://myguelcastro.com/">myguelcastro.com</a> · <a href="https://voxlaci.com/">voxlaci.com</a></p>
</div>`;
}

async function sendEmail(apiKey, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Resend HTTP ${res.status}: ${JSON.stringify(body)}`);
  return body;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}
