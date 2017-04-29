(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

/**
 * Generates a collection from multiple arrays
 *
 * @export
 * @param {{[key: string]: any[]}} input Object with arrays
 * @param {string} [primary] Key of primary array (result will have the same length)
 * @returns {{[key: string]: any}} Collection
 */
/**
 * Generates a collection from multiple arrays
 *
 * @export
 * @param {{[key: string]: any[]}} input Object with arrays
 * @param {string} [primary] Key of primary array (result will have the same length)
 * @returns {{[key: string]: any}} Collection
 */ var czip = function (input, primary) {
    var keys = Object.keys(input), primaryValues = input[primary || keys[0]];
    return primaryValues.map(function (val, i) {
        var res = {};
        keys.forEach(function (k) { return res[k] = input[k][i]; });
        return res;
    });
};

exports.czip = czip;

Object.defineProperty(exports, '__esModule', { value: true });

})));
