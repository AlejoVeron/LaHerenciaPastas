window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY > 900) {
      $("header").addClass("pastas__header");
    } else {
      $("header").removeClass("pastas__header");
    }
  },
  false
);
