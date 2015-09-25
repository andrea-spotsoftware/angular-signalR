(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('hubController', directive);


    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            templateUrl: 'layout/hub-controller.directive.html',
            restrict: 'E',
            scope: {
                hub: '=',
                state: '=socketState',
                onConnect: '&'
            }
        };
        return directive;

        function link(scope, element, attrs, controller) {
            if(attrs.autoconnect !== undefined){
                scope.vm.toggleConnect();
            }
            
            scope.vm.onConnect = (scope.vm.onConnect || angular.noop);
        }
    }

    Controller.$inject = ['$timeout'];

    /* @ngInject */
    function Controller($timeout) {

        var vm = this;

        // 0 --> disconnected;
        // 1 --> connecting;
        // 2 --> connected;

        vm.toggle = false;

        vm.toggleConnect = function ($ev) {

            vm.state = 1;

            if (!vm.toggle) {
                
                if(!$ev){
                    vm.toggle = true;
                }

                vm.hub.connect().then(function () {
                    vm.state = 2;
                    
                    vm.onConnect();
                    
                }).catch(function (e) {
                    vm.state = 0;
                    vm.toggle = false;
                });

            } else {
                vm.hub.disconnect();
                vm.state = 0;
            }

        };

    }
})();