(function () {
  function $(sel, el) {
    return (el || document).querySelector(sel);
  }

  function $$(sel, el) {
    return (el || document).querySelectorAll(sel);
  }

  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports.$ = $;
    module.exports.$$ = $$;
  } else if (window) {
    window.$ = $;
    window.$$ = $$;
  }
})();
