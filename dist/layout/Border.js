System.register(["./Bounds", "./Size"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bounds_1, Size_1, BorderOptions, Border;
    return {
        setters: [
            function (Bounds_1_1) {
                Bounds_1 = Bounds_1_1;
            },
            function (Size_1_1) {
                Size_1 = Size_1_1;
            }
        ],
        execute: function () {
            BorderOptions = (function () {
                function BorderOptions() {
                }
                return BorderOptions;
            }());
            exports_1("BorderOptions", BorderOptions);
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
                        this.options.north.bounds(new Bounds_1.Bounds({ 'x': left, 'y': top, 'width': right - left, 'height': tmp.height }));
                        this.options.north.doLayout();
                        top += tmp.height + this.options.vgap;
                    }
                    if (this.options.south && this.options.south.isVisible()) {
                        tmp = this.options.south.preferredSize();
                        this.options.south.bounds(new Bounds_1.Bounds({ 'x': left, 'y': bottom - tmp.height, 'width': right - left, 'height': tmp.height }));
                        this.options.south.doLayout();
                        bottom -= tmp.height + this.options.vgap;
                    }
                    if (this.options.east && this.options.east.isVisible()) {
                        tmp = this.options.east.preferredSize();
                        this.options.east.bounds(new Bounds_1.Bounds({ 'x': right - tmp.width, 'y': top, 'width': tmp.width, 'height': bottom - top }));
                        this.options.east.doLayout();
                        right -= tmp.width + this.options.hgap;
                    }
                    if (this.options.west && this.options.west.isVisible()) {
                        tmp = this.options.west.preferredSize();
                        this.options.west.bounds(new Bounds_1.Bounds({ 'x': left, 'y': top, 'width': tmp.width, 'height': bottom - top }));
                        this.options.west.doLayout();
                        left += tmp.width + this.options.hgap;
                    }
                    if (this.options.center && this.options.center.isVisible()) {
                        this.options.center.bounds(new Bounds_1.Bounds({ 'x': left, 'y': top, 'width': right - left, 'height': bottom - top }));
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
                        type_size = this.options.east[type + 'Size']();
                        width += type_size.width + this.options.hgap;
                        height = type_size.height;
                    }
                    if (this.options.west && this.options.west.isVisible()) {
                        type_size = this.options.west[type + 'Size']();
                        width += type_size.width + this.options.hgap;
                        height = Math.max(type_size.height, height);
                    }
                    if (this.options.center && this.options.center.isVisible()) {
                        type_size = this.options.center[type + 'Size']();
                        width += type_size.width;
                        height = Math.max(type_size.height, height);
                    }
                    if (this.options.north && this.options.north.isVisible()) {
                        type_size = this.options.north[type + 'Size']();
                        width = Math.max(type_size.width, width);
                        height += type_size.height + this.options.vgap;
                    }
                    if (this.options.south && this.options.south.isVisible()) {
                        type_size = this.options.south[type + 'Size']();
                        width = Math.max(type_size.width, width);
                        height += type_size.height + this.options.vgap;
                    }
                    return new Size_1.Size({
                        'width': width + insets.left + insets.right,
                        'height': height + insets.top + insets.bottom
                    });
                };
                return Border;
            }());
            exports_1("Border", Border);
        }
    };
});
