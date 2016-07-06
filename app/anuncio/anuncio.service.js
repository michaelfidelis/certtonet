(function () {
    'use strict';

    angular.module('app')
        .factory('AnuncioService', AnuncioService);

    AnuncioService.$inject = ['$resource'];

    function AnuncioService($resource) {
        return $resource('/data/anuncios.json');
    }

}());
