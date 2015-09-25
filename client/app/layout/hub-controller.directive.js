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
            if (attrs.autoconnect !== undefined) {
                scope.vm.toggleConnect();
            }

            scope.vm.onConnect = (scope.vm.onConnect || angular.noop);
        }
    }

    Controller.$inject = ['$timeout', '$scope'];

    /* @ngInject */
    function Controller($timeout, $scope) {

        var vm = this;

        // 0 --> connecting;
        // 1 --> connected;
        // 2 --> reconnecting;
        // 4 --> disconnected;

        vm.toggle = false;
        vm.state = 4;

        vm.toggleConnect = function ($ev) {

            if (vm.state === 4) {

                if (!$ev) {
                    //Autoconnect
                    vm.toggle = true;
                }

                vm.hub.connect().then(function () {
                    vm.onConnect();

                }).catch(function (e) {
                    vm.toggle = false;
                });
            } else {
                vm.hub.disconnect();
            }
        };

        vm.hub.stateChanged(function (states) {
            $scope.$applyAsync(function () {
                vm.state = states.newState;
            });
        });

    }
})();