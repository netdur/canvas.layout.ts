System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PointOptions, Point;
    return {
        setters: [],
        execute: function () {
            PointOptions = (function () {
                function PointOptions() {
                }
                return PointOptions;
            }());
            exports_1("PointOptions", PointOptions);
            Point = (function () {
                function Point(_a) {
                    var _b = _a.y, y = _b === void 0 ? 0 : _b, _c = _a.x, x = _c === void 0 ? 0 : _c;
                    this.x = x;
                    this.y = y;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    };
});
