(function () {
    'use strict';

    angular
        .module('app.public', [
            'app.public.receiver',
            'app.public.sender'
        ])
        .run(moduleRun);

    moduleRun.$inject = ['routerHelper'];

    function moduleRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.public',
                config: {
                    templateUrl: 'states/public/public.html',
                    abstract: true
                }
            }
        ];
    }
})();