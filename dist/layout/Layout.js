System.register(["./Border", "./Flow", "./Grid", "./FlexGrid", "./Absolute"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Border_1, Flow_1, Grid_1, FlexGrid_1, Absolute_1, Layout;
    return {
        setters: [
            function (Border_1_1) {
                Border_1 = Border_1_1;
            },
            function (Flow_1_1) {
                Flow_1 = Flow_1_1;
            },
            function (Grid_1_1) {
                Grid_1 = Grid_1_1;
            },
            function (FlexGrid_1_1) {
                FlexGrid_1 = FlexGrid_1_1;
            },
            function (Absolute_1_1) {
                Absolute_1 = Absolute_1_1;
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
            Layout.Grid = Grid_1.Grid;
            Layout.FlexGrid = FlexGrid_1.FlexGrid;
            Layout.Absolute = Absolute_1.Absolute;
            exports_1("Layout", Layout);
        }
    };
});
