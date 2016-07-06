(function () {
    'use strict';

    angular.module('app')
        .factory('ReservaService', ReservaService);

    ReservaService.$inject = ['$resource'];

    function ReservaService($resource) {
        return $resource('/data/reservas.json');
    }

}());
