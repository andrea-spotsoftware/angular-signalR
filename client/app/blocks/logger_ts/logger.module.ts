namespace blocks.logger {
    'use strict';
    
    angular.module('blocks.logger', [])
        .constant('toastr', toastr)
        .config(moduleConfig);
    
    moduleConfig.$inject = ['toastr'];
    
    function moduleConfig(toastr: Toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.progressBar = true;
    }
    
}