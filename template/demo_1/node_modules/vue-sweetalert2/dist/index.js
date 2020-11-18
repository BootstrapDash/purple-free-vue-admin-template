import Swal from 'sweetalert2/dist/sweetalert2.js';
var VueSweetalert2 = (function () {
    function VueSweetalert2() {
    }
    VueSweetalert2.install = function (vue, options) {
        var swalFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (options) {
                var mixed = Swal.mixin(options);
                return mixed.fire.apply(mixed, args);
            }
            return Swal.fire.apply(Swal, args);
        };
        var methodName;
        for (methodName in Swal) {
            if (Object.prototype.hasOwnProperty.call(Swal, methodName) &&
                typeof Swal[methodName] === 'function') {
                swalFunction[methodName] = (function (method) {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return Swal[method].apply(Swal, args);
                    };
                })(methodName);
            }
        }
        vue['swal'] = swalFunction;
        if (!vue.prototype.hasOwnProperty('$swal')) {
            vue.prototype.$swal = swalFunction;
        }
    };
    return VueSweetalert2;
}());
export default VueSweetalert2;
//# sourceMappingURL=index.js.map