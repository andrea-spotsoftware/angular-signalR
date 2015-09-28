/// <reference path="../../../typings/tsd.d.ts" />
var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        'use strict';
        angular.module('blocks.logger', [])
            .constant('toastr', toastr)
            .config(moduleConfig);
        moduleConfig.$inject = ['toastr'];
        function moduleConfig(toastr) {
            toastr.options.timeOut = 4000;
            toastr.options.positionClass = 'toast-top-right';
            toastr.options.progressBar = true;
        }
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=logger.module.js.map