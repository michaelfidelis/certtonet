(function () {
    'use strict';

    angular.module('app')
        .factory('HttpInterceptor', HttpInterceptor);

    HttpInterceptor.$inject = ['$q', '$log'];

    function HttpInterceptor($q, $log, $window) {
        $log.info('[Interceptor] Inicio...');

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        }

        function request(config) {
            $log.info('[Interceptor] Request');
            angular.element('#loader').hide();
            return config;
        }

        function requestError(rejection) {
            $log.error('[Interceptor] Request error');
            angular.element('#loader').hide();
            return $q.reject(rejection);
        }

        function response(response) {
            $log.info('[Interceptor] Response');
            angular.element('#loader').hide();
            return response;
        }

        function responseError(rejection) {
            $log.error('[Interceptor] Response error');
            angular.element('#loader').hide();
            return $q.reject(rejection);
        }

    }

}());
