System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function RegisterElement(_a) {
        var _b = _a.selector, selector = _b === void 0 ? "AbstractComponent" : _b, _c = _a.style, style = _c === void 0 ? "" : _c, _d = _a.template, template = _d === void 0 ? "" : _d;
        return function (target) {
        };
    }
    exports_1("RegisterElement", RegisterElement);
    var AbstractComponent;
    return {
        setters: [],
        execute: function () {
            AbstractComponent = (function () {
                function AbstractComponent() {
                }
                AbstractComponent.prototype.bounds = function (bounds) {
                    if (bounds != null) {
                        this._bounds = bounds;
                    }
                    return this._bounds;
                };
                return AbstractComponent;
            }());
            exports_1("AbstractComponent", AbstractComponent);
        }
    };
});
