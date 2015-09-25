(function () {
    'use strict';

    angular
        .module('app.public.sender')
        .controller('SenderController', SenderController);

    SenderController.$inject = ['NotificationHub', '$mdDialog'];

    /* @ngInject */
    function SenderController(NotificationHub, $mdDialog) {
        var vm = this;
        vm.hub = NotificationHub('notifications');
        
        vm.model = new function() {
            var model = this;
            
            model.socketState = 0;
        };

        vm.actions = new function () {
            var actions = this;

            actions.setupNotification = function (message) {

                vm.hub.invoke('Publish', {
                    message: message.notificationText,
                    millis: message.notificationSeconds * 1000
                }, function () {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .title('Good job!')                    
                        .clickOutsideToClose(true)
                        .content('Your notification has been published!')
                        .ok('Close')
                    );
                });
            };
        };

        activate();

        ////////////////

        function activate() {
            //vm.hub.connect();
        }
    }
})();