// SmileLab — scroll reveal (premium entrance motion)
(function () {
  "use strict";

  const root = document.documentElement;

  // Always start at the top on (re)load — ignore restored scroll & stale #hash,
  // so the hero loads centered with its margin and plays its entrance.
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  function jumpToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
  jumpToTop();
  window.addEventListener("load", jumpToTop);

  // Top-level sections to animate (skip the fixed chatbot widget)
  const targets = Array.prototype.slice
    .call(document.body.children)
    .filter(function (el) {
      return (
        el.nodeType === 1 &&
        !el.classList.contains("chatbot") &&
        el.tagName !== "SCRIPT" &&
        el.tagName !== "STYLE"
      );
    });

  if (!targets.length) return;

  // Enable the hidden state only now that JS is running
  root.classList.add("reveal-ready");
  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  // No IntersectionObserver? Just show everything.
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });

  // Reveal anything already in view on first paint (e.g. the hero)
  requestAnimationFrame(function () {
    targets.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
        observer.unobserve(el);
      }
    });
  });
})();
