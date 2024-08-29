function $(cssSelector, $parent = document) {
  let $child = $parent.querySelector(cssSelector);
  return $child;
}

function $$(cssSelector, $parent = document) {
  let nodeList = $parent.querySelectorAll(cssSelector);
  let $children = Array.from(nodeList);
  return $children;
}
