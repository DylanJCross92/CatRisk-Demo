"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f !== null;
  }).reduce(function (acc, f) {
    if (typeof f !== "function") {
      f = function f() {}; // make function a no-op just to move on
      // console.warn('This is sending an undefined function for some reason -- need to find out why this would throw otherwise' , ...funcs);
      // throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) {
      return f;
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

exports.default = createChainedFunction;