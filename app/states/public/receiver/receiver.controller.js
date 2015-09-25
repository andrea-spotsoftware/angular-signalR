(function () {
    'use strict';

    angular
        .module('app.public.receiver')
        .controller('ReceiverController', ReceiverController);

    ReceiverController.$inject = ['NotificationHub', 'logger'];

    /* @ngInject */
    function ReceiverController(NotificationHub, logger) {
        var vm = this;
        vm.hub = NotificationHub('notifications');

        vm.model = new function() {
            var model = this;
            
            model.notifications = [];
        };
        
        vm.listeners = {
            message: function (message) {
                vm.model.notifications.push({message: message, date: new Date()});
                logger.info(message);
            },
            connected: function(){
                vm.hub.invoke('Subscribe');
            }
        }

        activate();

        ////////////////

        function activate() {
            vm.hub.on('notification', vm.listeners.message);
        }
    }
})();