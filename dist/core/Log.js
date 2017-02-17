System.register(["../core/Canvas"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function AttachLogger() {
        return function (target) {
            Canvas_1.Canvas.attachedLoggers.push(target.name);
        };
    }
    exports_1("AttachLogger", AttachLogger);
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
    exports_1("Log", Log);
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
