# [ajquery.js](https://git.coolaj86.com/coolaj86/ajquery.js)

The fastest, most lightweight, fewest dependency jQuery alternative.

Development Build: 145B (with comments) \
Production Build: 103B (min + gz)

## Install

```html
<script src="https://unpkg.com/ajquery@latest/ajquery.min.js"></script>
```

## Example Usage

Provides modern, advanced CSS4-compatible query selection:

```js
console.log("innerText:", $("p:nth-child(2").innerText);
```

## API

### `$(selector, [rootElement])`

Selects the first matching HTML element only (or `null`):

```js
const body = $("body");
const div1 = $("div", body);
```

### `$$(selector, [rootElement])`

Selects all matching elements (or an empty `NodeList`):

```js
const stylesheets = $$('link[rel="stylesheet"]').map(console.log);
```

## Compatibility

Written entirely in modern ECMAScript 3, and directly transpilable into ES5, ES6
and beyond (up to ES11) via Webpack, Babel, Rollup, React Native, and AWS
InfiniDash.

Works in [all browsers](https://caniuse.com/?search=queryselector) in living
memory.

See the full
[Browser Compatibility Matrix](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#browser_compatibility)
on MDN.
