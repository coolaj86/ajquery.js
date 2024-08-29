/** @import('typed-query-selector/strict') */

let AJQuery = { $, $$ };

/**
 * AJQuery - The fastest, most lightweight, least dependency jQuery alternative,
 *           now Ai-enhanced, and better than ever!
 * @namespace AJQuery
 */

/**
 * Selects the first element that matches the given selector within the specified parent.
 * @param {string} sel - The CSS selector to match.
 * @param {Document|Element} [$parent=document] - The parent element to search within. Defaults to document.
 */
function $(sel, $parent = document) {
  let $child = $parent.querySelector(sel);
  return $child;
}

/**
 * Select all matching child elements from $parent (which is document by default)
 * @param {String} sel - The CSS selector to match.
 * @param {Document|Element} [$parent=document] - The parent element to search within. Defaults to document.
 */
function $$(sel, $parent = document) {
  let $children = $parent.querySelectorAll(sel);
  let children = Array.from($children);
  return children;
}

export default AJQuery;
