"use strict";
var AbstractComponent = (function () {
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
exports.AbstractComponent = AbstractComponent;
