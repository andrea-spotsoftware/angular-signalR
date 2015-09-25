(function () {
    'use strict';

    angular
        .module('app.public.sender', [])
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];

    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.public.sender',
                config: {
                    url: '/',
                    templateUrl: 'states/public/sender/sender.html',
                    controller: 'SenderController',
                    controllerAs: 'vm',
                    title: 'sender'
                }
            }
        ];
    }
})();