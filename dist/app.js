System.register(["./layout/Flow", "./layout/Grid", "./layout/FlexGrid", "./layout/Border", "./layout/Linear", "./components/Checkbox", "./components/Rect", "./core/Canvas"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Flow_1, Grid_1, FlexGrid_1, Border_1, Linear_1, Checkbox_1, Rect_1, Canvas_1, Main;
    return {
        setters: [
            function (Flow_1_1) {
                Flow_1 = Flow_1_1;
            },
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (FlexGrid_1_1) {
                FlexGrid_1 = FlexGrid_1_1;
            },
            function (Border_1_1) {
                Border_1 = Border_1_1;
            },
            function (Linear_1_1) {
                Linear_1 = Linear_1_1;
            },
            function (Checkbox_1_1) {
                Checkbox_1 = Checkbox_1_1;
            },
            function (Rect_1_1) {
                Rect_1 = Rect_1_1;
            },
            function (Canvas_1_1) {
                Canvas_1 = Canvas_1_1;
            }
        ],
        execute: function () {
            Main = (function () {
                function Main() {
                    var canvas;
                    var items;
                    var layout;
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 50,
                        comment: "flow - FlowAlignment.left"
                    });
                    new Flow_1.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_1.FlowAlignment.left
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 50,
                        comment: "flow - FlowAlignment.center"
                    });
                    new Flow_1.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_1.FlowAlignment.center
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 50,
                        comment: "flow - FlowAlignment.right"
                    });
                    new Flow_1.Flow({
                        items: this.getCheckboxes(4),
                        alignment: Flow_1.FlowAlignment.right
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 120,
                        comment: "flow - FlowAlignment.left & break"
                    });
                    new Flow_1.Flow({
                        items: this.getCheckboxes(20),
                        alignment: Flow_1.FlowAlignment.left
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 120,
                        comment: "Grid 2x2"
                    });
                    new Grid_1.Grid({
                        items: this.getCheckboxes(4),
                        rows: 2,
                        columns: 2
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 200,
                        comment: "Border - holy grail layout"
                    });
                    new Border_1.Border({
                        west: new Checkbox_1.Checkbox(),
                        center: new Checkbox_1.Checkbox(),
                        north: new Checkbox_1.Checkbox()
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 120,
                        comment: "flex grid - 2 cols 2 rows 6 components"
                    });
                    new FlexGrid_1.FlexGrid({
                        items: [new Checkbox_1.Checkbox(), new Rect_1.Rect({ backgroundColor: "green" }), new Checkbox_1.Checkbox(),
                            new Checkbox_1.Checkbox(), new Rect_1.Rect({ backgroundColor: "blue" }), new Checkbox_1.Checkbox()],
                        rows: 2,
                        columns: 2
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 120,
                        comment: "linear horizontal"
                    });
                    new Linear_1.Linear({
                        items: this.getCheckboxes(8),
                        orientation: Grid_1.Fill.horizontal
                    }).layout(canvas.root);
                    canvas = new Canvas_1.Canvas({
                        width: 600,
                        height: 120,
                        comment: "linear vertical"
                    });
                    new Linear_1.Linear({
                        items: this.getCheckboxes(3),
                        orientation: Grid_1.Fill.vertical
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
