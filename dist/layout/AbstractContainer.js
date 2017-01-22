"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractComponent_1 = require("./AbstractComponent");
var AbstractContainer = (function (_super) {
    __extends(AbstractContainer, _super);
    function AbstractContainer() {
        return _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AbstractContainer.prototype, "children", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractContainer;
}(AbstractComponent_1.AbstractComponent));
exports.AbstractContainer = AbstractContainer;
