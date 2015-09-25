(function () {
    'use strict';

    angular.module('blocks.logger', [
        ])
        .config(moduleConfig)
        .constant('toastr', toastr);

    moduleConfig.$inject = ['toastr'];

    function moduleConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.progressBar = true;
    }

})();