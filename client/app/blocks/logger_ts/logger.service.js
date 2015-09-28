/// <reference path="../../../typings/tsd.d.ts" />
var blocks;
(function (blocks) {
    var logger;
    (function (logger) {
        var LoggerService = (function () {
            function LoggerService($log, toastr) {
                this.$log = $log;
                this.toastr = toastr;
            }
            LoggerService.prototype.info = function (message, data, title) {
                this.toastr.info(message, title);
                this.$log.info('Info: ' + message, data);
            };
            LoggerService.prototype.error = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, data);
            };
            LoggerService.prototype.success = function (message, data, title) {
                this.toastr.success(message, title);
                this.$log.info('Success: ' + message, data);
            };
            LoggerService.prototype.warning = function (message, data, title) {
                this.toastr.warning(message, title);
                this.$log.warn('Warning: ' + message, data);
            };
            LoggerService.prototype.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                this.$log.log(args);
            };
            LoggerService.$inject = ['$log', 'toastr'];
            return LoggerService;
        })();
        logger.LoggerService = LoggerService;
        angular
            .module('blocks.logger')
            .service('logger', LoggerService);
    })(logger = blocks.logger || (blocks.logger = {}));
})(blocks || (blocks = {}));
//# sourceMappingURL=logger.service.js.map