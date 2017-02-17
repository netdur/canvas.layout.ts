System.register(["./FlexGrid", "./Grid"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var FlexGrid_1, Grid_1, Linear;
    return {
        setters: [
            function (FlexGrid_1_1) {
                FlexGrid_1 = FlexGrid_1_1;
            },
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            }
        ],
        execute: function () {
            Linear = (function (_super) {
                __extends(Linear, _super);
                function Linear(_a) {
                    var items = _a.items, _b = _a.orientation, orientation = _b === void 0 ? Grid_1.Fill.vertical : _b, _c = _a.hgap, hgap = _c === void 0 ? 1 : _c, _d = _a.vgap, vgap = _d === void 0 ? 1 : _d;
                    return _super.call(this, {
                        items: items,
                        columns: (orientation === Grid_1.Fill.vertical) ? 1 : items.length,
                        rows: (orientation === Grid_1.Fill.horizontal) ? 1 : items.length,
                        fillVertical: orientation,
                        hgap: hgap,
                        vgap: vgap
                    }) || this;
                }
                return Linear;
            }(FlexGrid_1.FlexGrid));
            exports_1("Linear", Linear);
        }
    };
});
