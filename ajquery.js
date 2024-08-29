function $(sel, $parent = document) {
  return $parent.querySelector(sel);
}

function $$(sel, $parent = document) {
  return Array.from($parent.querySelectorAll(sel));
}
