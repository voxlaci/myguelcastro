/* Corporate Team Building — comportamento da landing e do formulário de proposta.
   - Captura UTMs / referrer para campos ocultos
   - Eventos GA4: team_building_view, _cta_click, _form_start, _form_submit,
     _phone_click, _email_click
   - Submissão progressiva: POST fetch para /team-building-lead; em caso de
     falha de rede, faz fallback para mailto para o pedido não se perder.
   NÃO expõe chaves nem toca em nada do lado do servidor. */
(function () {
  var form = document.querySelector("[data-tb-form]");
  var note = document.querySelector("[data-tb-note]");
  var lang = (document.documentElement.lang || "pt").slice(0, 2);
  var isEN = lang === "en";

  function t(pt, en) { return isEN ? en : pt; }
  function ga(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }

  ga("team_building_view", { page_lang: lang, page_path: location.pathname });

  /* ── UTM / referrer → campos ocultos ─────────────────────────── */
  try {
    var qs = new URLSearchParams(location.search);
    var set = function (n, v) {
      var el = form && form.querySelector('input[name="' + n + '"]');
      if (el && v) el.value = String(v).slice(0, 120);
    };
    if (form) {
      set("utm_source", qs.get("utm_source"));
      set("utm_medium", qs.get("utm_medium"));
      set("utm_campaign", qs.get("utm_campaign"));
      set("referrer", document.referrer || "");
    }
  } catch (e) { /* noop */ }

  /* ── Eventos de CTA / contacto ───────────────────────────────── */
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a, button") : null;
    if (!a) return;
    var href = (a.getAttribute("href") || "").trim();
    if (a.hasAttribute("data-tb-cta")) {
      ga("team_building_cta_click", {
        cta: a.getAttribute("data-tb-cta"),
        cta_label: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
        page_lang: lang,
      });
    }
    if (href.indexOf("tel:") === 0) ga("team_building_phone_click", { page_lang: lang });
    else if (href.indexOf("mailto:") === 0) ga("team_building_email_click", { page_lang: lang });
    else if (href.indexOf("wa.me") > -1 || href.indexOf("whatsapp") > -1)
      ga("team_building_whatsapp_click", { page_lang: lang });
  }, true);

  if (!form) return;

  /* ── form_start (primeira interação) ─────────────────────────── */
  var started = false;
  form.addEventListener("focusin", function () {
    if (started) return;
    started = true;
    ga("team_building_form_start", { page_lang: lang });
  });

  /* ── Submissão ──────────────────────────────────────────────── */
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var required = ["name", "company", "email"];
    for (var i = 0; i < required.length; i++) {
      var f = form.elements[required[i]];
      if (!f || !f.value.trim()) {
        note.textContent = t("Preencha os campos obrigatórios (nome, empresa, email).",
                             "Please fill in the required fields (name, company, email).");
        f && f.focus();
        return;
      }
    }
    var email = form.elements["email"].value.trim();
    if (email.indexOf("@") < 1) {
      note.textContent = t("Verifique o endereço de email.", "Please check the email address.");
      form.elements["email"].focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = t("A enviar…", "Sending…"); }
    note.textContent = "";

    var data = new FormData(form);
    ga("team_building_form_submit", {
      page_lang: lang,
      duration: data.get("duration") || "",
      objective: data.get("objective") || "",
      language: data.get("language") || "",
    });

    fetch(form.getAttribute("action"), {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" },
    })
      .then(function (res) {
        if (res.ok || res.status === 303 || res.redirected) {
          window.location.href = isEN
            ? "/en/team-building/thank-you/"
            : "/team-building/obrigado/";
          return;
        }
        return res.text().then(function (txt) { throw new Error(txt || ("HTTP " + res.status)); });
      })
      .catch(function () {
        /* Fallback: não perder o lead se o backend ainda não estiver ligado */
        var lines = [
          "Nome: " + (data.get("name") || ""),
          "Empresa: " + (data.get("company") || ""),
          "Cargo: " + (data.get("role") || ""),
          "Email: " + (data.get("email") || ""),
          "Telefone: " + (data.get("phone") || ""),
          "Participantes: " + (data.get("participants") || ""),
          "Data: " + (data.get("requested_date") || ""),
          "Local: " + (data.get("city") || ""),
          "Duração: " + (data.get("duration") || ""),
          "Idioma: " + (data.get("language") || ""),
          "Objetivo: " + (data.get("objective") || ""),
          "",
          (data.get("message") || ""),
        ].join("\n");
        var subject = t("Pedido de proposta — Corporate Team Building",
                        "Proposal request — Corporate Team Building");
        window.location.href = "mailto:voxlaci@gmail.com?subject=" +
          encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines);
        note.textContent = t("Abrimos o seu email para enviar o pedido. Se preferir, escreva para voxlaci@gmail.com.",
                             "We opened your email app to send the request. You can also write to voxlaci@gmail.com.");
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || t("Receber proposta à medida", "Get a tailored proposal"); }
      });
  });
})();
