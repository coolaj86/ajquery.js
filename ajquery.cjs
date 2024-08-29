/**
 * @typedef AJQuery
 * @prop {AJQuerySelector} $
 * @prop {AJQuerySelectorAll} $$
 */

/**
 * Select first matching element, just like console $
 * @callback AJQuerySelector
 * @param {String} cssSelector
 * @param {ParentNode} [$parent=document]
 */

/**
 * Select all matching child elements as a JS Array, just like console $$
 * @callback AJQuerySelectorAll
 * @param {String} cssSelector
 * @param {ParentNode} [$parent=document]
 */

/** @type {AJQuery} */
//@ts-ignore
var AJQuery = ("object" === typeof module && exports) || {};
(function (window, AJQuery) {
  "use strict";

  /** @type {AJQuerySelector} */
  AJQuery.$ = function (cssSelector, $parent = document) {
    let $child = $parent.querySelector(cssSelector);
    return $child;
  };

  /** @type {AJQuerySelectorAll} */
  AJQuery.$$ = function (cssSelector, $parent = document) {
    let nodeList = $parent.querySelectorAll(cssSelector);
    let $children = Array.from(nodeList);
    return $children;
  };

  Object.assign(window, AJQuery);

  //@ts-ignore
  window.AJQuery = AJQuery;
})(globalThis.window || {}, AJQuery);
if ("object" === typeof module) {
  module.exports = AJQuery;
}
