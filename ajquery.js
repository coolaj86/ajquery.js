function $(sel, el) {
  return (el || document).querySelector(sel);
}

function $$(sel, el) {
  return Array.from((el || document).querySelectorAll(sel));
}
