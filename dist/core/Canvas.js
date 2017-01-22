System.register(["../components/Rect", "../layout/Bounds"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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
            exports_1("Canvas", Canvas);
        }
    };
});
