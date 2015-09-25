(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('notificationSender', directive);

    directive.$inject = [];

    /* @ngInject */
    function directive() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: NotificationSenderController,
            controllerAs: 'vm',
            templateUrl: 'layout/notification-sender.directive.html',
            restrict: 'E',
            scope: {
                notificationFunction: '&',
                enabled : '='
            }
        };
        return directive;
    }

    NotificationSenderController.$inject = [];

    /* @ngInject */
    function NotificationSenderController() {
        var vm = this;

        vm.submitted = false;

        vm.message = {
            notificationText: 'Default notification',
            notificationSeconds: 0
        };

        vm.setupNotification = function (form) {

            vm.submitted = true;
            
            if (form.$valid) {
                vm.notificationFunction({
                    msg: vm.message
                });

                vm.submitted = false;
                vm.message.notificationText = 'Default notification';
                vm.message.notificationSeconds = 0;
            }
        };
    }
})();