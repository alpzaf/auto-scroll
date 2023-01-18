"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttleMouseEvent = void 0;
var throttleMouseEvent = function (fn, interval) {
    var shouldFire = true;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (shouldFire) {
            fn.apply(_this, args);
            shouldFire = false;
            setTimeout(function () {
                shouldFire = true;
            }, interval);
        }
    };
};
exports.throttleMouseEvent = throttleMouseEvent;
