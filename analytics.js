/* Tracking leve de intenção de contacto — Myguel Santos e Castro.
   Só regista cliques. NÃO toca em formulários, Resend, Turnstile ou emails.
   Nenhum destes eventos deve ser marcado como conversão principal (key event)
   no GA4 — servem como micro-conversões / diagnóstico do funil. */
(function () {
  function send(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }
  function zone(el) {
    if (el.closest("header")) return "header";
    if (el.closest("footer")) return "footer";
    if (el.closest(".sp-hero, .hero")) return "hero";
    if (el.closest("#contacto, .contact-section")) return "contacto";
    return "corpo";
  }
  document.addEventListener(
    "click",
    function (e) {
      var a = e.target.closest ? e.target.closest("a, button") : null;
      if (!a) return;
      var href = (a.getAttribute("href") || "").trim();
      var loc = zone(a);
      if (href.indexOf("tel:") === 0) {
        send("contact_click_phone", { link_location: loc });
      } else if (href.indexOf("mailto:") === 0) {
        send("contact_click_email", { link_location: loc });
      } else if (href.indexOf("wa.me") > -1 || href.indexOf("api.whatsapp.com") > -1) {
        send("contact_click_whatsapp", { link_location: loc });
      } else if (a.tagName === "A" && a.classList.contains("button")) {
        send("cta_click", {
          cta_label: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
          link_location: loc,
        });
      }
    },
    true
  );
})();
