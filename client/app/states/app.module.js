(function () {
    'use strict';

    angular
        .module('app', [
            // core modules
            'app.core',
            'app.layout',
            // states modules
            'app.public'
        ])
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper', '$state'];

    function moduleRun(routerHelper, $state) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    abstract: true,
                    templateUrl: 'states/app.html',
                    controller: 'AppController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();