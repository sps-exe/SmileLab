// SmileLab — eased momentum scrolling (Lenis)
(function () {
  "use strict";

  // Bail gracefully if the Lenis library didn't load (offline, CDN blocked).
  if (typeof Lenis === "undefined") return;

  // Respect reduced-motion users — keep native scrolling for them.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new Lenis({
    lerp: 0.09,        // lower = smoother/floatier
    smoothWheel: true,
    wheelMultiplier: 1,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Route in-page anchor links (nav, buttons) through Lenis for eased jumps.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const target = link.getAttribute("href");
      if (!target || target === "#") return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -24, duration: 1.1 });
    });
  });

  // Expose for other scripts if needed.
  window.__lenis = lenis;
})();
