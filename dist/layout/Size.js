System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Size;
    return {
        setters: [],
        execute: function () {
            Size = (function () {
                function Size(_a) {
                    var _b = _a.width, width = _b === void 0 ? 0 : _b, _c = _a.height, height = _c === void 0 ? 0 : _c;
                    this.width = width;
                    this.height = height;
                }
                return Size;
            }());
            exports_1("Size", Size);
        }
    };
});
