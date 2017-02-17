System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BoundsOptions, Bounds;
    return {
        setters: [],
        execute: function () {
            BoundsOptions = (function () {
                function BoundsOptions() {
                }
                return BoundsOptions;
            }());
            exports_1("BoundsOptions", BoundsOptions);
            Bounds = (function () {
                function Bounds(options) {
                    if (options.x != undefined)
                        this.x = options.x;
                    if (options.y != undefined)
                        this.y = options.y;
                    if (options.width != undefined)
                        this.width = options.width;
                    if (options.height != undefined)
                        this.height = options.height;
                }
                return Bounds;
            }());
            exports_1("Bounds", Bounds);
        }
    };
});
