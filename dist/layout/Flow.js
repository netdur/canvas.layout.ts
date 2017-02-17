System.register(["./Bounds", "./Size", "./Point"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bounds_1, Size_1, Point_1, FlowAlignment, FlowOptions, Flow;
    return {
        setters: [
            function (Bounds_1_1) {
                Bounds_1 = Bounds_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            },
            function (Point_1_1) {
                Point_1 = Point_1_1;
            }
        ],
        execute: function () {
            (function (FlowAlignment) {
                FlowAlignment[FlowAlignment["center"] = 0] = "center";
                FlowAlignment[FlowAlignment["right"] = 1] = "right";
                FlowAlignment[FlowAlignment["left"] = 2] = "left";
            })(FlowAlignment || (FlowAlignment = {}));
            exports_1("FlowAlignment", FlowAlignment);
            FlowOptions = (function () {
                function FlowOptions() {
                    this.hgap = 5;
                    this.vgap = 5;
                    this.alignment = FlowAlignment.left;
                }
                return FlowOptions;
            }());
            exports_1("FlowOptions", FlowOptions);
            Flow = (function () {
                function Flow(_a) {
                    var _b = _a.hgap, hgap = _b === void 0 ? 5 : _b, _c = _a.vgap, vgap = _c === void 0 ? 5 : _c, _d = _a.alignment, alignment = _d === void 0 ? FlowAlignment.left : _d, items = _a.items;
                    this.options = {
                        hgap: hgap,
                        vgap: vgap,
                        alignment: alignment,
                        items: items
                    };
                }
                Flow.prototype.align = function (row, offset, rowSize, parentSize) {
                    var location = new Bounds_1.Bounds({
                        x: offset.x,
                        y: offset.y
                    });
                    var i = 0;
                    var len = row.length;
                    switch (this.options.alignment) {
                        case FlowAlignment.center:
                            location.x += (this.options.hgap + parentSize.width - rowSize.width) / 2;
                            break;
                        case FlowAlignment.right:
                            location.x += parentSize.width - rowSize.width + this.options.hgap;
                            break;
                    }
                    for (; i < len; i += 1) {
                        var _a = row[i].preferredSize(), width = _a.width, height = _a.height;
                        location.y = offset.y;
                        row[i].bounds(new Bounds_1.Bounds({
                            y: location.y,
                            x: location.x,
                            width: width,
                            height: height
                        }));
                        row[i].doLayout();
                        location.x += row[i].bounds().width + this.options.hgap;
                    }
                };
                Flow.prototype.layout = function (container) {
                    var parentSize = container.bounds();
                    var insets = container.insets();
                    var i = 0;
                    var len = this.options.items.length;
                    var itemSize;
                    var currentRow = [];
                    var rowSize = new Size_1.Size({
                        width: 0,
                        height: 0
                    });
                    var offset = new Point_1.Point({
                        x: insets.left,
                        y: insets.top
                    });
                    parentSize.width -= insets.left + insets.right;
                    parentSize.height -= insets.top + insets.bottom;
                    for (; i < len; i += 1) {
                        if (this.options.items[i].isVisible()) {
                            itemSize = this.options.items[i].preferredSize();
                            if ((rowSize.width + itemSize.width) > parentSize.width) {
                                this.align(currentRow, offset, rowSize, parentSize);
                                currentRow = [];
                                offset.y += rowSize.height;
                                offset.x = insets.left;
                                rowSize.width = 0;
                                rowSize.height = 0;
                            }
                            rowSize.height = Math.max(rowSize.height, itemSize.height + this.options.vgap);
                            rowSize.width += itemSize.width + this.options.hgap;
                            currentRow.push(this.options.items[i]);
                        }
                    }
                    this.align(currentRow, offset, rowSize, parentSize);
                    return container;
                };
                Flow.prototype.preferred = function (container) {
                    return this.typeLayout('preferred', container);
                };
                Flow.prototype.minimum = function (container) {
                    return this.typeLayout('minimum', container);
                };
                Flow.prototype.maximum = function (container) {
                    return this.typeLayout('maximum', container);
                };
                Flow.prototype.typeLayout = function (type, container) {
                    var i = 0;
                    var width = 0;
                    var height = 0;
                    var typeSize;
                    var firstComponent = false;
                    var insets = container.insets();
                    for (; i < this.options.items.length; i += 1) {
                        if (this.options.items[i].isVisible()) {
                            typeSize = this.options.items[i][type + "Size"]();
                            height = Math.max(height, typeSize.height);
                            width += typeSize.width;
                        }
                    }
                    return new Size_1.Size({
                        'width': width + insets.left + insets.right + (this.options.items.length - 1) * this.options.hgap,
                        'height': height + insets.top + insets.bottom
                    });
                };
                return Flow;
            }());
            exports_1("Flow", Flow);
        }
    };
});
