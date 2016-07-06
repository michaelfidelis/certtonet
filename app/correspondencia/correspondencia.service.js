(function () {
    'use strict';

    angular.module('app')
        .factory('CorrespondenciaService', CorrespondenciaService);

    CorrespondenciaService.$inject = ['$resource'];

    function CorrespondenciaService($resource) {
        return $resource('/data/correspondencias.json');
    }

}());
