# [ajquery.js](https://git.coolaj86.com/coolaj86/ajquery.js)

The fastest, most lightweight, fewest dependency jQuery alternative.

Development Build: 145B (with comments) \
Production Build: 103B (min + gz)

## Example Usage

Provides modern, advanced CSS4-compatible query selection:

```js
console.log("innerText:", $("p:nth-child(2").innerText);
```

## Install

### via GitHub

```bash
my_ver="v2.1.2"

mkdir ./vendor/
curl -fsSL "https://raw.githubusercontent.com/coolaj86/ajquery.js/${my_ver}/ajquery.js" \
    -o ./vendor/ajquery.js
```

```html
<script src="/vendor/ajquery.js"></script>
```

### via CDN

```html
<script src="https://unpkg.com/ajquery"></script>
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
const head = $("head");
const stylesheets = $$('link[rel="stylesheet"]', head).map(console.log);
```

## Benchmarks

![ajquery-benchmarks](https://user-images.githubusercontent.com/122831/126774421-1ee009f4-d16d-4710-b041-f19035ff8c35.png "it's over 9000")

## Compatibility

Written entirely in modern ECMAScript 3, and directly transpilable into ES5, ES6
and beyond (up to ES11) via Webpack, Babel, Rollup, React Native, and AWS
InfiniDash.

Works in [all browsers](https://caniuse.com/?search=queryselector) in living
memory.

See the full
[Browser Compatibility Matrix](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#browser_compatibility)
on MDN.
