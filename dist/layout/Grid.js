System.register(["../components/AbstractContainer", "./Bounds", "./Size", "../core/Log"], function (exports_1, context_1) {
    "use strict";
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
    var AbstractContainer_1, Bounds_1, Size_1, Log_1, Fill, GridOptions, Grid;
    return {
        setters: [
            function (AbstractContainer_1_1) {
                AbstractContainer_1 = AbstractContainer_1_1;
            },
            function (Bounds_1_1) {
                Bounds_1 = Bounds_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            },
            function (Log_1_1) {
                Log_1 = Log_1_1;
            }
        ],
        execute: function () {
            (function (Fill) {
                Fill[Fill["vertical"] = 0] = "vertical";
                Fill[Fill["horizontal"] = 1] = "horizontal";
            })(Fill || (Fill = {}));
            exports_1("Fill", Fill);
            GridOptions = (function () {
                function GridOptions() {
                }
                return GridOptions;
            }());
            exports_1("GridOptions", GridOptions);
            Grid = (function () {
                function Grid(_a) {
                    var items = _a.items, columns = _a.columns, _b = _a.rows, rows = _b === void 0 ? 0 : _b, _c = _a.fillVertical, fillVertical = _c === void 0 ? Fill.vertical : _c, _d = _a.hgap, hgap = _d === void 0 ? 5 : _d, _e = _a.vgap, vgap = _e === void 0 ? 5 : _e;
                    this.options = {
                        items: items,
                        columns: columns,
                        rows: rows,
                        fillVertical: fillVertical,
                        hgap: hgap,
                        vgap: vgap
                    };
                    this.options.columns = this.options.columns || this.options.items.length;
                    if (this.options.rows > 0) {
                        this.options.columns = Math.floor((this.options.items.length + this.options.rows - 1) / this.options.rows);
                    }
                    else {
                        this.options.rows = Math.floor((this.options.items.length + this.options.columns - 1) / this.options.columns);
                    }
                }
                Grid.prototype.layout = function (container) {
                    var i;
                    var j;
                    var insets = container.insets();
                    var x = insets.left;
                    var y = insets.top;
                    var width = (container.bounds().width - (insets.left + insets.right) - (this.options.columns - 1) * this.options.hgap) / this.options.columns;
                    var height = (container.bounds().height - (insets.top + insets.bottom) - (this.options.rows - 1) * this.options.vgap) / this.options.rows;
                    for (i = 0, j = 1; i < this.options.items.length; i += 1, j += 1) {
                        this.options.items[i].bounds(new Bounds_1.Bounds({ 'x': x, 'y': y, 'width': width, 'height': height }));
                        if (!this.options.fillVertical) {
                            if (j >= this.options.columns) {
                                y += height + this.options.vgap;
                                x = insets.left;
                                j = 0;
                            }
                            else {
                                x += width + this.options.hgap;
                            }
                        }
                        else {
                            if (j >= this.options.rows) {
                                x += width + this.options.hgap;
                                y = insets.top;
                                j = 0;
                            }
                            else {
                                y += height + this.options.vgap;
                            }
                        }
                        this.options.items[i].doLayout();
                    }
                    return container;
                };
                Grid.prototype.items = function () {
                    return this.options.items;
                };
                Grid.prototype.preferred = function (container) {
                    return this.typeLayout('preferred', container);
                };
                Grid.prototype.minimum = function (container) {
                    return this.typeLayout('minimum', container);
                };
                Grid.prototype.maximum = function (container) {
                    return this.typeLayout('maximum', container);
                };
                Grid.prototype.typeLayout = function (type, container) {
                    var insets = container.insets();
                    var width = 0;
                    var height = 0;
                    var type_size;
                    var i = 0;
                    for (; i < this.options.items.length; i += 1) {
                        type_size = this.options.items[i][type + "Size"]();
                        width = Math.max(width, type_size.width);
                        height = Math.max(height, type_size.height);
                    }
                    return new Size_1.Size({
                        'width': insets.left + insets.right + this.options.columns * width + (this.options.columns - 1) * this.options.hgap,
                        'height': insets.top + insets.bottom + this.options.rows * height + (this.options.rows - 1) * this.options.vgap
                    });
                };
                return Grid;
            }());
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", void 0)
            ], Grid.prototype, "layout", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Array)
            ], Grid.prototype, "items", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", Size_1.Size)
            ], Grid.prototype, "preferred", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", Size_1.Size)
            ], Grid.prototype, "minimum", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", Size_1.Size)
            ], Grid.prototype, "maximum", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [String, AbstractContainer_1.AbstractContainer]),
                __metadata("design:returntype", Size_1.Size)
            ], Grid.prototype, "typeLayout", null);
            exports_1("Grid", Grid);
        }
    };
});
