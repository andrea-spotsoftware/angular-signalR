(function () {
    'use strict';

    angular
        .module('app.public.receiver', [])
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];

    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.public.receiver',
                config: {
                    url: '/receiver',
                    templateUrl: 'states/public/receiver/receiver.html',
                    controller: 'ReceiverController',
                    controllerAs: 'vm',
                    title: 'receiver'
                }
            }
        ];
    }
})();