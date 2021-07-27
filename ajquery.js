function $(sel, el) {
  return (el || document).querySelector(sel);
}

function $$(sel, el) {
  return (el || document).querySelectorAll(sel);
}

$.on = function (sel, event, fn) {
  document.body.addEventListener(function (ev) {
    if (!ev.target.matchSelector(sel)) {
      return true;
    }
    fn.call(ev.target, ev);
  });
};
