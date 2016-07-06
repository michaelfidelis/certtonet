(function () {
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];

    function AppConfig($routeProvider, $locationProvider, $httpProvider) {


        $httpProvider.interceptors.push('HttpInterceptor');
        $httpProvider.defaults.transformRequest = function (data, headersGetter) {
            // todo start the spinner here
            jQ('#loader').show();
            return data;
        };

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        }).hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/noticias.html',
                controller: 'NoticiaController',
                controllerAs: 'vm',
            })
            .when('/novanoticia', {
                templateUrl: 'app/views/nova-noticia.html',
                controller: 'NoticiaController',
                controllerAs: 'vm',
            })
            .when('/reservas', {
                templateUrl: 'app/views/reservas.html',
                controller: 'ReservaController',
                controllerAs: 'vm',
            })
            .when('/novareserva', {
                templateUrl: 'app/views/nova-reserva.html',
                controller: 'ReservaController',
                controllerAs: 'vm',
            })
            .when('/correspondencias', {
                templateUrl: 'app/views/correspondencias.html',
                controller: 'CorrespondenciaController',
                controllerAs: 'vm',
            })
            .when('/anuncios', {
                templateUrl: 'app/views/anuncios.html',
                controller: 'AnuncioController',
                controllerAs: 'vm',
            })
            // caso não seja nenhum desses, redirecione para a rota '/'
            .otherwise({
                redirectTo: '/'
            });
    }
}());
