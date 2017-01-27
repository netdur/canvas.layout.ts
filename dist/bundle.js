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
System.register("layout/Size", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SizeOptions, Size;
    return {
        setters: [],
        execute: function () {
            SizeOptions = (function () {
                function SizeOptions() {
                }
                return SizeOptions;
            }());
            exports_1("SizeOptions", SizeOptions);
            Size = (function () {
                function Size(_a) {
                    var _b = _a.width, width = _b === void 0 ? 0 : _b, _c = _a.height, height = _c === void 0 ? 0 : _c;
                    this.width = width;
                    this.height = height;
                }
                return Size;
            }());
            exports_1("Size", Size);
        }
    };
});
System.register("layout/Point", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var PointOptions, Point;
    return {
        setters: [],
        execute: function () {
            PointOptions = (function () {
                function PointOptions() {
                }
                return PointOptions;
            }());
            exports_2("PointOptions", PointOptions);
            Point = (function () {
                function Point(_a) {
                    var _b = _a.y, y = _b === void 0 ? 0 : _b, _c = _a.x, x = _c === void 0 ? 0 : _c;
                    this.x = x;
                    this.y = y;
                }
                return Point;
            }());
            exports_2("Point", Point);
        }
    };
});
System.register("layout/Bounds", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var BoundsOptions, Bounds;
    return {
        setters: [],
        execute: function () {
            BoundsOptions = (function () {
                function BoundsOptions() {
                }
                return BoundsOptions;
            }());
            exports_3("BoundsOptions", BoundsOptions);
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
            exports_3("Bounds", Bounds);
        }
    };
});
System.register("layout/Insets", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Insets;
    return {
        setters: [],
        execute: function () {
            Insets = (function () {
                function Insets() {
                    this.top = 0;
                    this.bottom = 0;
                    this.left = 0;
                    this.right = 0;
                }
                return Insets;
            }());
            exports_4("Insets", Insets);
        }
    };
});
System.register("core/Log", ["core/Canvas"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    function AttachLogger() {
        return function (target) {
            Canvas_1.Canvas.attachedLoggers.push(target.name);
        };
    }
    exports_5("AttachLogger", AttachLogger);
    function Log(igonore, trace) {
        return function (target, key, descriptor) {
            var originalMethod = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var a = args.map(function (a) { return JSON.stringify(a); }).join();
                var result = originalMethod.apply(this, args);
                var r = JSON.stringify(result);
                if (Canvas_1.Canvas.debug && igonore != false) {
                    if (Canvas_1.Canvas.attachedLoggers.indexOf(target.constructor.name) !== -1) {
                        if (trace)
                            console.trace();
                        console.log(target.constructor.name + "::" + key);
                        console.log("Call: " + key + "(" + a + ") => " + r);
                    }
                }
                return result;
            };
            return descriptor;
        };
    }
    exports_5("Log", Log);
    var Canvas_1;
    return {
        setters: [
            function (Canvas_1_1) {
                Canvas_1 = Canvas_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("components/Rect", ["components/AbstractContainer", "layout/Size", "layout/Insets", "core/Canvas", "core/Log"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var AbstractContainer_1, Size_1, Insets_1, Canvas_2, Log_1, Rect;
    return {
        setters: [
            function (AbstractContainer_1_1) {
                AbstractContainer_1 = AbstractContainer_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            },
            function (Insets_1_1) {
                Insets_1 = Insets_1_1;
            },
            function (Canvas_2_1) {
                Canvas_2 = Canvas_2_1;
            },
            function (Log_1_1) {
                Log_1 = Log_1_1;
            }
        ],
        execute: function () {
            Rect = (function (_super) {
                __extends(Rect, _super);
                function Rect(_a) {
                    var _b = (_a === void 0 ? {} : _a).backgroundColor, backgroundColor = _b === void 0 ? "lightblue" : _b;
                    var _this = _super.call(this) || this;
                    _this.backgroundColor = backgroundColor;
                    return _this;
                }
                Rect.prototype.preferredSize = function () {
                    return new Size_1.Size({
                        width: 132,
                        height: 132
                    });
                };
                Rect.prototype.minimumSize = function () {
                    return new Size_1.Size({
                        width: 116,
                        height: 116
                    });
                };
                Rect.prototype.maximumSize = function () {
                    return new Size_1.Size({
                        width: 148,
                        height: 148
                    });
                };
                Rect.prototype.isVisible = function () {
                    return true;
                };
                Rect.prototype.insets = function () {
                    return new Insets_1.Insets();
                };
                Rect.prototype.doLayout = function () {
                    var bounds = this.bounds();
                    var ctx = Canvas_2.Canvas._ctx;
                    ctx.fillStyle = this.backgroundColor;
                    ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
                };
                Rect.prototype.connectedCallback = function () { };
                Rect.prototype.disconnectedCallback = function () { };
                Rect.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) { };
                Rect.prototype.adoptedCallback = function (oldCanvas, newCanvas) { };
                return Rect;
            }(AbstractContainer_1.AbstractContainer));
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Rect.prototype, "preferredSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Rect.prototype, "minimumSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Rect.prototype, "maximumSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Boolean)
            ], Rect.prototype, "isVisible", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Insets_1.Insets)
            ], Rect.prototype, "insets", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], Rect.prototype, "doLayout", null);
            exports_6("Rect", Rect);
        }
    };
});
System.register("core/Canvas", ["components/Rect", "layout/Bounds"], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Rect_1, Bounds_1, Canvas;
    return {
        setters: [
            function (Rect_1_1) {
                Rect_1 = Rect_1_1;
            },
            function (Bounds_1_1) {
                Bounds_1 = Bounds_1_1;
            }
        ],
        execute: function () {
            Canvas = (function () {
                function Canvas(_a) {
                    var _b = _a.id, id = _b === void 0 ? "" : _b, canvas = _a.canvas, _c = _a.width, width = _c === void 0 ? 600 : _c, _d = _a.height, height = _d === void 0 ? 400 : _d;
                    if (canvas instanceof HTMLCanvasElement) {
                        this.element = canvas;
                    }
                    if (id != "" && !(canvas instanceof HTMLCanvasElement)) {
                        this.element = document.getElementById(id);
                    }
                    else {
                        this.element = document.createElement("canvas");
                        document.body.appendChild(this.element);
                        var hr = document.createElement("hr");
                        document.body.appendChild(hr);
                    }
                    this.element.width = width;
                    this.element.height = height;
                    this.ctx = this.element.getContext("2d");
                    Canvas._ctx = this.ctx;
                    this.root = new Rect_1.Rect();
                    this.root.bounds(new Bounds_1.Bounds({
                        x: 0,
                        y: 0,
                        width: width,
                        height: height
                    }));
                    this.root.doLayout();
                }
                return Canvas;
            }());
            Canvas.debug = true;
            Canvas.attachedLoggers = new Array();
            exports_7("Canvas", Canvas);
        }
    };
});
System.register("components/AbstractComponent", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    function RegisterElement(_a) {
        var _b = _a.selector, selector = _b === void 0 ? "AbstractComponent" : _b, _c = _a.style, style = _c === void 0 ? "" : _c, _d = _a.template, template = _d === void 0 ? "" : _d;
        return function (target) {
        };
    }
    exports_8("RegisterElement", RegisterElement);
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
            exports_8("AbstractComponent", AbstractComponent);
        }
    };
});
System.register("components/AbstractContainer", ["components/AbstractComponent"], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
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
            exports_9("AbstractContainer", AbstractContainer);
        }
    };
});
System.register("layout/AbstractLayout", [], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var AbstractLayout;
    return {
        setters: [],
        execute: function () {
            AbstractLayout = (function () {
                function AbstractLayout() {
                }
                return AbstractLayout;
            }());
            exports_10("AbstractLayout", AbstractLayout);
        }
    };
});
System.register("layout/Border", ["layout/Bounds", "layout/Size"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Bounds_2, Size_2, BorderOptions, Border;
    return {
        setters: [
            function (Bounds_2_1) {
                Bounds_2 = Bounds_2_1;
            },
            function (Size_2_1) {
                Size_2 = Size_2_1;
            }
        ],
        execute: function () {
            BorderOptions = (function () {
                function BorderOptions() {
                }
                return BorderOptions;
            }());
            exports_11("BorderOptions", BorderOptions);
            Border = (function () {
                function Border(_a) {
                    var center = _a.center, north = _a.north, south = _a.south, east = _a.east, west = _a.west, _b = _a.hgap, hgap = _b === void 0 ? 5 : _b, _c = _a.vgap, vgap = _c === void 0 ? 5 : _c;
                    this.children = new Array();
                    this.options = {
                        center: center,
                        north: north,
                        south: south,
                        east: east,
                        west: west,
                        hgap: hgap,
                        vgap: vgap
                    };
                    if (this.options.east)
                        this.children.push(this.options.east);
                    if (this.options.west)
                        this.children.push(this.options.west);
                    if (this.options.north)
                        this.children.push(this.options.north);
                    if (this.options.south)
                        this.children.push(this.options.south);
                    if (this.options.east)
                        this.children.push(this.options.center);
                }
                Border.prototype.items = function () {
                    return this.children;
                };
                Border.prototype.layout = function (container) {
                    var size = container.bounds();
                    var insets = container.insets();
                    var top = insets.top;
                    var bottom = size.height - insets.bottom;
                    var left = insets.left;
                    var right = size.width - insets.right;
                    var tmp;
                    if (this.options.north && this.options.north.isVisible()) {
                        tmp = this.options.north.preferredSize();
                        this.options.north.bounds(new Bounds_2.Bounds({ 'x': left, 'y': top, 'width': right - left, 'height': tmp.height }));
                        this.options.north.doLayout();
                        top += tmp.height + this.options.vgap;
                    }
                    if (this.options.south && this.options.south.isVisible()) {
                        tmp = this.options.south.preferredSize();
                        this.options.south.bounds(new Bounds_2.Bounds({ 'x': left, 'y': bottom - tmp.height, 'width': right - left, 'height': tmp.height }));
                        this.options.south.doLayout();
                        bottom -= tmp.height + this.options.vgap;
                    }
                    if (this.options.east && this.options.east.isVisible()) {
                        tmp = this.options.east.preferredSize();
                        this.options.east.bounds(new Bounds_2.Bounds({ 'x': right - tmp.width, 'y': top, 'width': tmp.width, 'height': bottom - top }));
                        this.options.east.doLayout();
                        right -= tmp.width + this.options.hgap;
                    }
                    if (this.options.west && this.options.west.isVisible()) {
                        tmp = this.options.west.preferredSize();
                        this.options.west.bounds(new Bounds_2.Bounds({ 'x': left, 'y': top, 'width': tmp.width, 'height': bottom - top }));
                        this.options.west.doLayout();
                        left += tmp.width + this.options.hgap;
                    }
                    if (this.options.center && this.options.center.isVisible()) {
                        this.options.center.bounds(new Bounds_2.Bounds({ 'x': left, 'y': top, 'width': right - left, 'height': bottom - top }));
                        this.options.center.doLayout();
                    }
                    return container;
                };
                Border.prototype.preferred = function (container) {
                    return this.typeLayout('preferred', container);
                };
                Border.prototype.minimum = function (container) {
                    return this.typeLayout('minimum', container);
                };
                Border.prototype.maximum = function (container) {
                    return this.typeLayout('maximum', container);
                };
                Border.prototype.typeLayout = function (type, container) {
                    var insets = container.insets();
                    var width = 0;
                    var height = 0;
                    var type_size;
                    if (this.options.east && this.options.east.isVisible()) {
                        type_size = this.options.east["${type}Size"]();
                        width += type_size.width + this.options.hgap;
                        height = type_size.height;
                    }
                    if (this.options.west && this.options.west.isVisible()) {
                        type_size = this.options.west["${type}Size"]();
                        width += type_size.width + this.options.hgap;
                        height = Math.max(type_size.height, height);
                    }
                    if (this.options.center && this.options.center.isVisible()) {
                        type_size = this.options.center["${type}Size"]();
                        width += type_size.width;
                        height = Math.max(type_size.height, height);
                    }
                    if (this.options.north && this.options.north.isVisible()) {
                        type_size = this.options.north["${type}Size"]();
                        width = Math.max(type_size.width, width);
                        height += type_size.height + this.options.vgap;
                    }
                    if (this.options.south && this.options.south.isVisible()) {
                        type_size = this.options.south["${type}Size"]();
                        width = Math.max(type_size.width, width);
                        height += type_size.height + this.options.vgap;
                    }
                    return new Size_2.Size({
                        'width': width + insets.left + insets.right,
                        'height': height + insets.top + insets.bottom
                    });
                };
                return Border;
            }());
            exports_11("Border", Border);
        }
    };
});
System.register("layout/Flow", ["layout/Bounds", "layout/Size", "layout/Point"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var Bounds_3, Size_3, Point_1, FlowAlignment, FlowOptions, Flow;
    return {
        setters: [
            function (Bounds_3_1) {
                Bounds_3 = Bounds_3_1;
            },
            function (Size_3_1) {
                Size_3 = Size_3_1;
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
            exports_12("FlowAlignment", FlowAlignment);
            FlowOptions = (function () {
                function FlowOptions() {
                    this.hgap = 5;
                    this.vgap = 5;
                    this.alignment = FlowAlignment.left;
                }
                return FlowOptions;
            }());
            exports_12("FlowOptions", FlowOptions);
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
                    var location = new Bounds_3.Bounds({
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
                        row[i].bounds(new Bounds_3.Bounds({
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
                    var rowSize = new Size_3.Size({
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
                            typeSize = this.options.items[i]["${type}Size"]();
                            height = Math.max(height, typeSize.height);
                            width += typeSize.width;
                        }
                    }
                    return new Size_3.Size({
                        'width': width + insets.left + insets.right + (this.options.items.length - 1) * this.options.hgap,
                        'height': height + insets.top + insets.bottom
                    });
                };
                return Flow;
            }());
            exports_12("Flow", Flow);
        }
    };
});
System.register("layout/Grid", ["components/AbstractContainer", "layout/Bounds", "layout/Size", "core/Log"], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var AbstractContainer_2, Bounds_4, Size_4, Log_2, Fill, GridOptions, Grid;
    return {
        setters: [
            function (AbstractContainer_2_1) {
                AbstractContainer_2 = AbstractContainer_2_1;
            },
            function (Bounds_4_1) {
                Bounds_4 = Bounds_4_1;
            },
            function (Size_4_1) {
                Size_4 = Size_4_1;
            },
            function (Log_2_1) {
                Log_2 = Log_2_1;
            }
        ],
        execute: function () {
            (function (Fill) {
                Fill[Fill["vertical"] = 0] = "vertical";
                Fill[Fill["horizontal"] = 1] = "horizontal";
            })(Fill || (Fill = {}));
            exports_13("Fill", Fill);
            GridOptions = (function () {
                function GridOptions() {
                }
                return GridOptions;
            }());
            exports_13("GridOptions", GridOptions);
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
                        this.options.items[i].bounds(new Bounds_4.Bounds({ 'x': x, 'y': y, 'width': width, 'height': height }));
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
                        type_size = this.options.items[i]["${type}Size"]();
                        width = Math.max(width, type_size.width);
                        height = Math.max(height, type_size.height);
                    }
                    return new Size_4.Size({
                        'width': insets.left + insets.right + this.options.columns * width + (this.options.columns - 1) * this.options.hgap,
                        'height': insets.top + insets.bottom + this.options.rows * height + (this.options.rows - 1) * this.options.vgap
                    });
                };
                return Grid;
            }());
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_2.AbstractContainer]),
                __metadata("design:returntype", void 0)
            ], Grid.prototype, "layout", null);
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Array)
            ], Grid.prototype, "items", null);
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_2.AbstractContainer]),
                __metadata("design:returntype", Size_4.Size)
            ], Grid.prototype, "preferred", null);
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_2.AbstractContainer]),
                __metadata("design:returntype", Size_4.Size)
            ], Grid.prototype, "minimum", null);
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_2.AbstractContainer]),
                __metadata("design:returntype", Size_4.Size)
            ], Grid.prototype, "maximum", null);
            __decorate([
                Log_2.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [String, AbstractContainer_2.AbstractContainer]),
                __metadata("design:returntype", Size_4.Size)
            ], Grid.prototype, "typeLayout", null);
            exports_13("Grid", Grid);
        }
    };
});
System.register("layout/FlexGrid", ["layout/Grid", "components/AbstractContainer", "layout/Size", "core/Log"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var Grid_1, AbstractContainer_3, Size_5, Log_3, FlexGrid;
    return {
        setters: [
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (AbstractContainer_3_1) {
                AbstractContainer_3 = AbstractContainer_3_1;
            },
            function (Size_5_1) {
                Size_5 = Size_5_1;
            },
            function (Log_3_1) {
                Log_3 = Log_3_1;
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
                        type_size = this.options.items[i]["${type}Size"]();
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
                    return new Size_5.Size({
                        width: insets.left + insets.right + nw + (this.options.columns - 1) * this.options.hgap,
                        height: insets.top + insets.bottom + nh + (this.options.rows - 1) * this.options.vgap
                    });
                };
                return FlexGrid;
            }(Grid_1.Grid));
            __decorate([
                Log_3.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [AbstractContainer_3.AbstractContainer]),
                __metadata("design:returntype", void 0)
            ], FlexGrid.prototype, "layout", null);
            __decorate([
                Log_3.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [String, AbstractContainer_3.AbstractContainer]),
                __metadata("design:returntype", Size_5.Size)
            ], FlexGrid.prototype, "typeLayout", null);
            exports_14("FlexGrid", FlexGrid);
        }
    };
});
System.register("layout/Layout", ["layout/Border", "layout/Flow", "layout/Grid", "layout/FlexGrid"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var Border_1, Flow_1, Grid_2, FlexGrid_1, Layout;
    return {
        setters: [
            function (Border_1_1) {
                Border_1 = Border_1_1;
            },
            function (Flow_1_1) {
                Flow_1 = Flow_1_1;
            },
            function (Grid_2_1) {
                Grid_2 = Grid_2_1;
            },
            function (FlexGrid_1_1) {
                FlexGrid_1 = FlexGrid_1_1;
            }
        ],
        execute: function () {
            Layout = (function () {
                function Layout() {
                }
                return Layout;
            }());
            Layout.VERTICAL = "vertical";
            Layout.HORIZONTAL = "horizontal";
            Layout.WRAP_CONTENT = "wrap_content";
            Layout.MATCH_PARENT = "match_parent";
            Layout.Border = Border_1.Border;
            Layout.Flow = Flow_1.Flow;
            Layout.Grid = Grid_2.Grid;
            Layout.FlexGrid = FlexGrid_1.FlexGrid;
            exports_15("Layout", Layout);
        }
    };
});
System.register("components/Checkbox", ["components/AbstractContainer", "layout/Size", "layout/Insets", "core/Canvas", "core/Log"], function (exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var AbstractContainer_4, Size_6, Insets_2, Canvas_3, Log_4, Checkbox;
    return {
        setters: [
            function (AbstractContainer_4_1) {
                AbstractContainer_4 = AbstractContainer_4_1;
            },
            function (Size_6_1) {
                Size_6 = Size_6_1;
            },
            function (Insets_2_1) {
                Insets_2 = Insets_2_1;
            },
            function (Canvas_3_1) {
                Canvas_3 = Canvas_3_1;
            },
            function (Log_4_1) {
                Log_4 = Log_4_1;
            }
        ],
        execute: function () {
            Checkbox = (function (_super) {
                __extends(Checkbox, _super);
                function Checkbox() {
                    return _super.apply(this, arguments) || this;
                }
                Checkbox.prototype.preferredSize = function () {
                    return new Size_6.Size({
                        width: 32,
                        height: 32
                    });
                };
                Checkbox.prototype.minimumSize = function () {
                    return new Size_6.Size({
                        width: 16,
                        height: 16
                    });
                };
                Checkbox.prototype.maximumSize = function () {
                    return new Size_6.Size({
                        width: 48,
                        height: 48
                    });
                };
                Checkbox.prototype.isVisible = function () {
                    return true;
                };
                Checkbox.prototype.insets = function () {
                    return new Insets_2.Insets();
                };
                Checkbox.prototype.doLayout = function () {
                    var bounds = this.bounds();
                    var ctx = Canvas_3.Canvas._ctx;
                    ctx.save();
                    ctx.fillStyle = "#dddddd";
                    ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#333333";
                    ctx.rect(bounds.x, bounds.y, bounds.width, bounds.height);
                    ctx.stroke();
                    ctx.restore();
                };
                Checkbox.prototype.connectedCallback = function () { };
                Checkbox.prototype.disconnectedCallback = function () { };
                Checkbox.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue) { };
                Checkbox.prototype.adoptedCallback = function (oldCanvas, newCanvas) { };
                return Checkbox;
            }(AbstractContainer_4.AbstractContainer));
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_6.Size)
            ], Checkbox.prototype, "preferredSize", null);
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_6.Size)
            ], Checkbox.prototype, "minimumSize", null);
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_6.Size)
            ], Checkbox.prototype, "maximumSize", null);
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Boolean)
            ], Checkbox.prototype, "isVisible", null);
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Insets_2.Insets)
            ], Checkbox.prototype, "insets", null);
            __decorate([
                Log_4.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], Checkbox.prototype, "doLayout", null);
            exports_16("Checkbox", Checkbox);
        }
    };
});
System.register("app", ["layout/Flow", "layout/Grid", "layout/FlexGrid", "layout/Border", "components/Checkbox", "components/Rect", "core/Canvas"], function (exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var Flow_2, Grid_3, FlexGrid_2, Border_2, Checkbox_1, Rect_2, Canvas_4, Main;
    return {
        setters: [
            function (Flow_2_1) {
                Flow_2 = Flow_2_1;
            },
            function (Grid_3_1) {
                Grid_3 = Grid_3_1;
            },
            function (FlexGrid_2_1) {
                FlexGrid_2 = FlexGrid_2_1;
            },
            function (Border_2_1) {
                Border_2 = Border_2_1;
            },
            function (Checkbox_1_1) {
                Checkbox_1 = Checkbox_1_1;
            },
            function (Rect_2_1) {
                Rect_2 = Rect_2_1;
            },
            function (Canvas_4_1) {
                Canvas_4 = Canvas_4_1;
            }
        ],
        execute: function () {
            Main = (function () {
                function Main() {
                    var canvas;
                    var items;
                    var layout;
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 50
                    });
                    new Flow_2.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_2.FlowAlignment.left
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 50
                    });
                    new Flow_2.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_2.FlowAlignment.center
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 50
                    });
                    new Flow_2.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_2.FlowAlignment.right
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 120
                    });
                    new Flow_2.Flow({
                        items: this.getCheckboxes(20),
                        alignment: Flow_2.FlowAlignment.left
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 120
                    });
                    new Grid_3.Grid({
                        items: this.getCheckboxes(4),
                        rows: 2,
                        columns: 2
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 200
                    });
                    new Border_2.Border({
                        west: new Checkbox_1.Checkbox(),
                        center: new Checkbox_1.Checkbox(),
                        north: new Checkbox_1.Checkbox()
                    }).layout(canvas.root);
                    canvas = new Canvas_4.Canvas({
                        width: 600,
                        height: 120
                    });
                    new FlexGrid_2.FlexGrid({
                        items: [new Checkbox_1.Checkbox(), new Rect_2.Rect({ backgroundColor: "green" }), new Checkbox_1.Checkbox(),
                            new Checkbox_1.Checkbox(), new Rect_2.Rect({ backgroundColor: "blue" }), new Checkbox_1.Checkbox()],
                        rows: 2,
                        columns: 2
                    }).layout(canvas.root);
                }
                Main.prototype.getCheckboxes = function (len) {
                    var list = new Array();
                    for (var i = 0; i < len; i++)
                        list.push(new Checkbox_1.Checkbox());
                    return list;
                };
                return Main;
            }());
            new Main();
        }
    };
});
System.register("layout/Absolute", ["layout/AbstractLayout", "layout/Size"], function (exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var AbstractLayout_1, Size_7, Absolute;
    return {
        setters: [
            function (AbstractLayout_1_1) {
                AbstractLayout_1 = AbstractLayout_1_1;
            },
            function (Size_7_1) {
                Size_7 = Size_7_1;
            }
        ],
        execute: function () {
            Absolute = (function (_super) {
                __extends(Absolute, _super);
                function Absolute() {
                    return _super.apply(this, arguments) || this;
                }
                Absolute.prototype.preferred = function (container) {
                    return new Size_7.Size({
                        height: 100,
                        width: 100
                    });
                };
                Absolute.prototype.minimum = function (container) {
                    return new Size_7.Size({
                        height: 100,
                        width: 100
                    });
                };
                Absolute.prototype.maximum = function (container) {
                    return new Size_7.Size({
                        height: 100,
                        width: 100
                    });
                };
                Absolute.prototype.layout = function (container) { };
                return Absolute;
            }(AbstractLayout_1.AbstractLayout));
            exports_18("Absolute", Absolute);
        }
    };
});
System.register("layout/Constraint", ["layout/AbstractLayout", "layout/Size"], function (exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var AbstractLayout_2, Size_8, Constraint;
    return {
        setters: [
            function (AbstractLayout_2_1) {
                AbstractLayout_2 = AbstractLayout_2_1;
            },
            function (Size_8_1) {
                Size_8 = Size_8_1;
            }
        ],
        execute: function () {
            Constraint = (function (_super) {
                __extends(Constraint, _super);
                function Constraint() {
                    return _super.apply(this, arguments) || this;
                }
                Constraint.prototype.preferred = function (container) {
                    return new Size_8.Size({
                        height: 100,
                        width: 100
                    });
                };
                Constraint.prototype.minimum = function (container) {
                    return new Size_8.Size({
                        height: 100,
                        width: 100
                    });
                };
                Constraint.prototype.maximum = function (container) {
                    return new Size_8.Size({
                        height: 100,
                        width: 100
                    });
                };
                Constraint.prototype.layout = function (container) { };
                return Constraint;
            }(AbstractLayout_2.AbstractLayout));
            exports_19("Constraint", Constraint);
        }
    };
});
System.register("layout/Linear", ["layout/AbstractLayout", "layout/Size"], function (exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var AbstractLayout_3, Size_9, Linear;
    return {
        setters: [
            function (AbstractLayout_3_1) {
                AbstractLayout_3 = AbstractLayout_3_1;
            },
            function (Size_9_1) {
                Size_9 = Size_9_1;
            }
        ],
        execute: function () {
            Linear = (function (_super) {
                __extends(Linear, _super);
                function Linear() {
                    return _super.apply(this, arguments) || this;
                }
                Linear.prototype.preferred = function (container) {
                    return new Size_9.Size({
                        height: 100,
                        width: 100
                    });
                };
                Linear.prototype.minimum = function (container) {
                    return new Size_9.Size({
                        height: 100,
                        width: 100
                    });
                };
                Linear.prototype.maximum = function (container) {
                    return new Size_9.Size({
                        height: 100,
                        width: 100
                    });
                };
                Linear.prototype.layout = function (container) { };
                return Linear;
            }(AbstractLayout_3.AbstractLayout));
            exports_20("Linear", Linear);
        }
    };
});
System.register("layout/Relative", ["layout/AbstractLayout", "layout/Size"], function (exports_21, context_21) {
    "use strict";
    var __moduleName = context_21 && context_21.id;
    var AbstractLayout_4, Size_10, Relative;
    return {
        setters: [
            function (AbstractLayout_4_1) {
                AbstractLayout_4 = AbstractLayout_4_1;
            },
            function (Size_10_1) {
                Size_10 = Size_10_1;
            }
        ],
        execute: function () {
            Relative = (function (_super) {
                __extends(Relative, _super);
                function Relative() {
                    return _super.apply(this, arguments) || this;
                }
                Relative.prototype.preferred = function (container) {
                    return new Size_10.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.minimum = function (container) {
                    return new Size_10.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.maximum = function (container) {
                    return new Size_10.Size({
                        height: 100,
                        width: 100
                    });
                };
                Relative.prototype.layout = function (container) { };
                return Relative;
            }(AbstractLayout_4.AbstractLayout));
            exports_21("Relative", Relative);
        }
    };
});
