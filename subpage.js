/* Subpáginas — comportamento mínimo do header e da navegação.
   NÃO carrega o script.js principal (que assume o formulário de contacto da homepage). */
(function () {
  var header = document.querySelector("[data-header]");
  function syncHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
