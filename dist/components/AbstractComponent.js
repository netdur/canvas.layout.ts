System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
