var Blocks;
(function (Blocks) {
    var Logger;
    (function (Logger) {
        var LoggerService = (function () {
            function LoggerService($log, toastr) {
                this.log = $log;
                this.toastr = toastr;
            }
            return LoggerService;
        })();
        angular.module('blocks.logger').factory('logger', LoggerService);
    })(Logger = Blocks.Logger || (Blocks.Logger = {}));
})(Blocks || (Blocks = {}));
//# sourceMappingURL=logger.service.js.map