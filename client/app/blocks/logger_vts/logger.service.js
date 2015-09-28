var Blocks;
(function (Blocks) {
    var Logger;
    (function (Logger) {
        var LoggerService = (function () {
            function LoggerService($log, toastr) {
                this.$log = $log;
                this.toastr = toastr;
            }
            LoggerService.prototype.logInfo = function (message, data, title) {
                this.toastr.info(message, title);
                this.$log.info('Info: ' + message, data);
            };
            LoggerService.prototype.logError = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, data);
            };
            LoggerService.prototype.logSuccess = function (message, data, title) {
                this.toastr.success(message, title);
                this.$log.info('Success: ' + message, data);
            };
            LoggerService.prototype.logWarning = function (message, data, title) {
                this.toastr.warning(message, title);
                this.$log.warn('Warning: ' + message, data);
            };
            LoggerService.prototype.log = function (message, data, title) {
                this.toastr.error(message, title);
                this.$log.error('Error: ' + message, data);
            };
            return LoggerService;
        })();
        angular.module('blocks.logger').factory('logger', LoggerService);
    })(Logger = Blocks.Logger || (Blocks.Logger = {}));
})(Blocks || (Blocks = {}));
//# sourceMappingURL=logger.service.js.map