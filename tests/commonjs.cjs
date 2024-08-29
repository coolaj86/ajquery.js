"use strict";

let AJQueryDefault = require("../");
let AJQueryExplicit = require("../ajquery.cjs");

if (!AJQueryDefault.$) {
  throw new Error("did not export $ correctly");
}
if (!AJQueryDefault.$$) {
  throw new Error("did not export $$ correctly");
}

if (AJQueryDefault.$ !== AJQueryExplicit.$) {
  throw new Error("exported $s do not match");
}

if (AJQueryDefault.$$ !== AJQueryExplicit.$$) {
  throw new Error("exported $$s do not match");
}

console.log(`\x1b[34mPASS\x1b[33m`);
