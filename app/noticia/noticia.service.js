(function () {
    'use strict';

    angular.module('app')
        .factory('NoticiaService', NoticiaService);

    NoticiaService.$inject = ['$resource'];

    function NoticiaService($resource) {
        return $resource('/data/noticias.json');
    }

}())
