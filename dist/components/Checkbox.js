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
    var AbstractContainer_1, Size_1, Insets_1, Canvas_1, Log_1, Checkbox;
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
            Checkbox = (function (_super) {
                __extends(Checkbox, _super);
                function Checkbox() {
                    return _super.apply(this, arguments) || this;
                }
                Checkbox.prototype.preferredSize = function () {
                    return new Size_1.Size({
                        width: 32,
                        height: 32
                    });
                };
                Checkbox.prototype.minimumSize = function () {
                    return new Size_1.Size({
                        width: 16,
                        height: 16
                    });
                };
                Checkbox.prototype.maximumSize = function () {
                    return new Size_1.Size({
                        width: 48,
                        height: 48
                    });
                };
                Checkbox.prototype.isVisible = function () {
                    return true;
                };
                Checkbox.prototype.insets = function () {
                    return new Insets_1.Insets();
                };
                Checkbox.prototype.doLayout = function () {
                    var bounds = this.bounds();
                    var ctx = Canvas_1.Canvas._ctx;
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
            }(AbstractContainer_1.AbstractContainer));
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Checkbox.prototype, "preferredSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Checkbox.prototype, "minimumSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Size_1.Size)
            ], Checkbox.prototype, "maximumSize", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Boolean)
            ], Checkbox.prototype, "isVisible", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", Insets_1.Insets)
            ], Checkbox.prototype, "insets", null);
            __decorate([
                Log_1.Log(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], Checkbox.prototype, "doLayout", null);
            exports_1("Checkbox", Checkbox);
        }
    };
});
