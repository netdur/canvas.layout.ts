System.register(["./AbstractContainer", "../layout/Size", "../layout/Insets", "../core/Canvas", "../core/Log"], function (exports_1, context_1) {
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
    var AbstractContainer_1, Size_1, Insets_1, Canvas_1, Log_1, Rect;
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
            function (Canvas_1_1) {
                Canvas_1 = Canvas_1_1;
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
                    var ctx = Canvas_1.Canvas._ctx;
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
            exports_1("Rect", Rect);
        }
    };
});
