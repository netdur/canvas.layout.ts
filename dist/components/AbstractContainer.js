System.register(["./AbstractComponent"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var AbstractComponent_1, AbstractContainer;
    return {
        setters: [
            function (AbstractComponent_1_1) {
                AbstractComponent_1 = AbstractComponent_1_1;
            }
        ],
        execute: function () {
            AbstractContainer = (function (_super) {
                __extends(AbstractContainer, _super);
                function AbstractContainer() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.items = new Array();
                    return _this;
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
            exports_1("AbstractContainer", AbstractContainer);
        }
    };
});
