(function () {
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ['$routeProvider', '$locationProvider'];

    function AppConfig($routeProvider, $locationProvider) {

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
            // caso não seja nenhum desses, redirecione para a rota '/'
            .otherwise({
                redirectTo: '/'
            });
    }
}());
