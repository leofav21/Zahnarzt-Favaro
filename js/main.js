/* ============================================================
   Zahnarztpraxis Favaro – Interaktivität
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobiles Menü ---- */
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });

    // Menü schließen beim Klick auf einen Link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Menü öffnen");
      });
    });
  }

  /* ---- Header-Schatten beim Scrollen ---- */
  const header = document.querySelector(".site-header");
  const onScroll = function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Scroll-Reveal-Animationen ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Aktuelles Jahr im Footer ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Kontaktformular (Demo – kein Backend) ---- */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      if (!form.checkValidity()) {
        status.textContent = "Bitte füllen Sie die Pflichtfelder aus.";
        status.classList.add("error");
        form.reportValidity();
        return;
      }

      // Hinweis: In der Live-Version hier die Daten an ein Backend
      // oder einen Formular-Dienst (z. B. Formspree) senden.
      status.textContent =
        "Vielen Dank! Ihre Anfrage wurde erfasst. Wir melden uns in Kürze bei Ihnen.";
      status.classList.add("success");
      form.reset();
    });
  }
})();
