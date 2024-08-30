/**
 * AJQuery - The fastest, most lightweight, least dependency jQuery alternative,
 *           now typed, Ai-enhanced, and better than ever!
 */

/**
 * Select first matching element, just like console $
 * @param {String} cssSelector
 * @param {ParentNode} [$parent=document]
 */
function $(cssSelector, $parent = document) {
  let $child = $parent.querySelector(cssSelector);
  return $child;
}

/**
 * Select all matching child elements as a JS Array, just like console $$
 * @param {String} cssSelector
 * @param {ParentNode} [$parent=document]
 */
function $$(cssSelector, $parent = document) {
  let nodeList = $parent.querySelectorAll(cssSelector);
  let $children = Array.from(nodeList);
  return $children;
}
