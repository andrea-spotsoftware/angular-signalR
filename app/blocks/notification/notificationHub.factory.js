(function () {
    'use strict';

    angular
        .module('blocks.notification')
        .factory('NotificationHub', notificationHubFactory);

    notificationHubFactory.$inject = ['$rootScope', 'CONFIG', 'logger', '$q'];

    /* @ngInject */
    function notificationHubFactory($rootScope, CONFIG, logger, $q) {

        return constructor;

        ////////////////

        function constructor(hubName, serverUrl) {

            var url = serverUrl ? serverUrl : CONFIG.signalrServerUrl;

            var connection = $.hubConnection(url);
            var proxy = connection.createHubProxy(hubName);

            connection.logging = true;

            return {
                connect: function () {
                    var deferred = $q.defer();
                    connection.start({
                            transport: ['webSockets', 'longPolling']
                        })
                        .done(function () {
                            deferred.resolve();
                        })
                        .fail(function (e) {
                            deferred.reject(e);
                            logger.error(e);
                        });
                    return deferred.promise;
                },
                disconnect: function () {
                    connection.stop();
                },
                on: function (eventName, callback) {
                    proxy.on(eventName, function (result) {
                        $rootScope.$apply(function () {
                            if (callback) {
                                callback(result);
                            }
                        });
                    });
                },
                invoke: function (methodName, args, callback) {
                    if (args) {
                        proxy.invoke(methodName, args)
                            .done(function (result) {
                                $rootScope.$apply(function () {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                    } else {
                        proxy.invoke(methodName)
                            .done(function (result) {
                                $rootScope.$apply(function () {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                    }
                }
            };
        }
    }
})();