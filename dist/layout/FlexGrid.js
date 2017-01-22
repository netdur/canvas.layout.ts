System.register(["./Grid", "../components/AbstractContainer", "./Size", "../core/Log"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var Grid_1, AbstractContainer_1, Size_1, Log_1, FlexGrid;
    return {
        setters: [
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (AbstractContainer_1_1) {
                AbstractContainer_1 = AbstractContainer_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            },
            function (Log_1_1) {
                Log_1 = Log_1_1;
            }
        ],
        execute: function () {
            FlexGrid = (function (_super) {
                __extends(FlexGrid, _super);
                function FlexGrid() {
                    return _super.apply(this, arguments) || this;
                }
                FlexGrid.prototype.zeroArray = function (a, l) {
                    var i = 0;
                    for (; i < l; i += 1) {
                        a[i] = 0;
                    }
                    return a;
                };
                FlexGrid.prototype.layout = function (container) {
                    var i = 0;
                    var c = 0;
                    var r = 0;
                    var pd = this.preferred(container);
                    var sw = container.bounds().width / pd.width;
                    var sh = container.bounds().height / pd.height;
                    var w = this.zeroArray([], this.options.columns);
                    var h = this.zeroArray([], this.options.rows);
                    var insets = container.insets();
                    var x = insets.left;
                    var y = insets.top;
                    var d;
                    for (i = 0; i < this.options.items.length; i += 1) {
                        r = Math.floor(i / this.options.columns);
                        c = i % this.options.columns;
                        d = this.options.items[i].preferredSize();
                        d.width = sw * d.width;
                        d.height = sh * d.height;
                        if (w[c] < d.width) {
                            w[c] = d.width;
                        }
                        if (h[r] < d.height) {
                            h[r] = d.height;
                        }
                    }
                    for (c = 0; c < this.options.columns; c += 1) {
                        for (r = 0, y = insets.top; r < this.options.rows; r += 1) {
                            i = r * this.options.columns + c;
                            if (i < this.options.items.length) {
                                this.options.items[i].bounds({ 'x': x, 'y': y, 'width': w[c], 'height': h[r] });
                                this.options.items[i].doLayout();
                            }
                            y += h[r] + this.options.vgap;
                        }
                        x += w[c] + this.options.hgap;
                    }
                    return container;
                };
                FlexGrid.prototype.typeLayout = function (type, container) {
                    var i = 0;
                    var r = 0;
                    var c = 0;
                    var nw = 0;
                    var nh = 0;
                    var w = this.zeroArray([], this.options.columns);
                    var h = this.zeroArray([], this.options.rows);
                    var type_size;
                    var insets = container.insets();
                    for (i = 0; i < this.options.items.length; i += 1) {
                        r = Math.floor(i / this.options.columns);
                        c = i % this.options.columns;
                        type_size = this.options.items[i][type + 'Size']();
                        if (w[c] < type_size.width) {
                            w[c] = type_size.width;
                        }
                        if (h[r] < type_size.height) {
                            h[r] = type_size.height;
                        }
                    }
                    for (i = 0; i < this.options.columns; i += 1) {
                        nw += w[i];
                    }
                    for (i = 0; i < this.options.rows; i += 1) {
                        nh += h[i];
                    }
                    return new Size_1.Size({
                        width: insets.left + insets.right + nw + (this.options.columns - 1) * this.options.hgap,
                        height: insets.top + insets.bottom + nh + (this.options.rows - 1) * this.options.vgap
                    });
                };
                return FlexGrid;
            }(Grid_1.Grid));
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", void 0)
            ], FlexGrid.prototype, "layout", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [String, AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", Size_1.Size)
            ], FlexGrid.prototype, "typeLayout", null);
            exports_1("FlexGrid", FlexGrid);
        }
    };
});
