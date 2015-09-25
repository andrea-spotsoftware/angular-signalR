(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', appController);

    appController.$inject = ['logger'];

    function appController(logger) {
        /* jshint validthis:true */
        var vm = this;
        
        activate();

        function activate() {
        }
    }
})();