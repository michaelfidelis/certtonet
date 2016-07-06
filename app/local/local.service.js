(function () {
    'use strict';

    angular.module('app')
        .factory('LocalService', LocalService);

    LocalService.$inject = ['$resource'];

    function LocalService($resource) {
        return $resource('/data/locais.json');
    }

}())
