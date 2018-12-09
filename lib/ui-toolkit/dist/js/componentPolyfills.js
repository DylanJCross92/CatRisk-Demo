"use strict";

/*
* These are the only polyfills required by the components.
* The 'config/polyfills.js' file is only used by the localhost.
*/
if (!Object.values) {
  require("core-js/fn/object/values");
}
if (!Object.entries) {
  require("core-js/fn/object/entries");
}