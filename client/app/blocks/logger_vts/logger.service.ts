module Blocks.Logger {
    
    interface loggerFunction {
        (message: string, data: Object, title: string): void;
    }
    
    interface ILoggerService {
        info: loggerFunction;
        error: loggerFunction;
        success: loggerFunction;
        warning: loggerFunction;
        log: loggerFunction;
    }
    
    class LoggerService {

        log: ng.ILogService;
        toastr: any;

        constructor($log: ng.ILogService, toastr: any) {
            this.log = $log;
            this.toastr = toastr;
        }

        function logInfo(message: string, data: Object, title: string) {
            this.toastr.info(message, title);
            this.log.info('Info: ' + message, data);
        }
    
        function logError(message: string, data: Object, title: string) {
            this.toastr.error(message, title);
            this.log.error('Error: ' + message, data);
        }
    
        function logSuccess(message: string, data: Object, title: string) {
            this.toastr.success(message, title);
            this.log.info('Success: ' + message, data);
        }
    
        function logWarning(message: string, data: Object, title: string) {
            this.toastr.warning(message, title);
            this.log.warn('Warning: ' + message, data);
        }
    
        function log(message: string, data: Object, title: string) {
            this.toastr.error(message, title);
            this.log.error('Error: ' + message, data);
        }
        
        /*var service : ILoggerService = {
            log: log.log,
            logInfo: logInfo,
            logError: logError,
            logSuccess: logSuccess,
            logWarning: logWarning
        };
    
        return service;*/
    }
    angular.module('blocks.logger').factory('logger', LoggerService);
}