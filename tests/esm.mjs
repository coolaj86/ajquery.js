"use strict";

import AJQueryExplicit from "../ajquery.mjs";

if (!AJQueryExplicit.$) {
  throw new Error("did not export $ correctly");
}
if (!AJQueryExplicit.$$) {
  throw new Error("did not export $$ correctly");
}

console.log(`\x1b[34mPASS\x1b[33m`);
