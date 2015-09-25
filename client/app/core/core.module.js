(function () {
    'use strict';

    angular.module('app.core', [
        // Angular modules 
        'ngAnimate',
        'ngSanitize',
        'ngMaterial',
        'ngMessages',
        // Custom modules 
        'blocks.logger',
        'blocks.router',
        //'blocks.network',
        'blocks.signalr',
        // Third parties modules
        'ui.bootstrap',
        'ui.router'
    ]).config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$logProvider', 'routerHelperProvider'];
    moduleRun.$inject = ['routerHelper'];

    var config = {
        appErrorPrefix: '[AngularSignalRClient Error] ',
        appTitle: 'Angular SignalR Client'
    };

    function moduleConfig($logProvider, routerHelperProvider) {

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        routerHelperProvider.configure({
            docTitle: config.appTitle + ': '
        });
    }

    function moduleRun(routerHelper) {
        var otherwise = '/404';
        routerHelper.configureStates(getStates(), otherwise);
    }


    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    title: 'not found',
                    templateUrl: 'core/404.html'
                }
            }
        ];
    }

})();