(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

/*
 A good reference for how to handle Props, State, etc... in TypeScript
 https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v15/index.d.ts
*/
var Component = /** @class */ (function () {
    function Component(props, context) {
        this.props = props;
    }
    Component.prototype.render = function () { };
    return Component;
}());

function isClass(element) {
    return typeof element === 'function'
        && element.prototype instanceof Component;
}
function isStatelessComponent(element) {
    return !isClass(element) && typeof element === 'function';
}
var factory = function (elementName, attributes) {
    if (attributes === void 0) { attributes = {}; }
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var element = null;
    if (isClass(elementName)) {
        var instance = new elementName(attributes);
        return instance.render();
    }
    else if (isStatelessComponent(elementName)) {
        return elementName(attributes);
    }
    else {
        children = [].concat.apply([], children);
        element = { elementName: elementName, attributes: attributes, children: children };
    }
    return element;
};

exports.Component = Component;
exports.jsx = factory;

Object.defineProperty(exports, '__esModule', { value: true });

})));
