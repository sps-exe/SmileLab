/* Dark-mode toggle wiring.
   The initial theme is applied by a tiny inline script in <head>
   (anti-FOUC); this file just wires up the toggle button(s) and
   persists the choice. */
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "smilelab-theme";

  function isDark() {
    return root.getAttribute("data-theme") === "dark";
  }

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var buttons = document.querySelectorAll(".theme-toggle");
  buttons.forEach(function (btn) {
    btn.setAttribute("aria-pressed", String(isDark()));
    btn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage unavailable — toggle still works for the session */
      }
      buttons.forEach(function (b) {
        b.setAttribute("aria-pressed", String(next === "dark"));
      });
    });
  });
})();
