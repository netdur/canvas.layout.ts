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
                function Point(options) {
                    this.x = options.x;
                    this.y = options.y;
                }
                return Point;
            }());
            exports_1("Point", Point);
        }
    };
});
