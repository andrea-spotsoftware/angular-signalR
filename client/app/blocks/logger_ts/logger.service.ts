/// <reference path="../../../typings/tsd.d.ts" />
namespace blocks.logger {
    
    interface ILoggerFunction {
        (message: string, data: Object, title: string): void;
    }
    
    export interface ILoggerService {
        info: ILoggerFunction;
        error: ILoggerFunction;
        success: ILoggerFunction;
        warning: ILoggerFunction;
        log: (...args: any[]) => void;
    }

    export class LoggerService implements ILoggerService {
        static $inject = ['$log', 'toastr'];
        
        $log: ng.ILogService;        
        toastr: Toastr;

        constructor($log: ng.ILogService, toastr: Toastr) {
            this.$log = $log;
            this.toastr = toastr;
        }

        info(message: string, data: Object, title: string) {
            this.toastr.info(message, title);
            this.$log.info('Info: ' + message, data);
        }
    
        error(message: string, data: Object, title: string) {
            this.toastr.error(message, title);
            this.$log.error('Error: ' + message, data);
        }
    
        success(message: string, data: Object, title: string) {
            this.toastr.success(message, title);
            this.$log.info('Success: ' + message, data);
        }
    
        warning(message: string, data: Object, title: string) {
            this.toastr.warning(message, title);
            this.$log.warn('Warning: ' + message, data);
        }
    
        log(...args: any[]) {
            this.$log.log(args);
        }
    }

    angular
        .module('blocks.logger')
        .service('logger', LoggerService);
}