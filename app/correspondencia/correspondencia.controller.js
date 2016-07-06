(function () {
    'use strict';
    angular.module('app')
        .controller('CorrespondenciaController', CorrespondenciaController);

    CorrespondenciaController.$inject = ['CorrespondenciaService'];

    function CorrespondenciaController(CorrespondenciaService) {
        var vm = this;
        vm.correspondencias = [];
        vm.locais = [];

        vm.listarCorrespondencias = listarCorrespondencias;
        vm.adicionarCorrespondencia = adicionarCorrespondencia;

        vm.listarCorrespondencias();

        function listarCorrespondencias() {
            vm.correspondencias = CorrespondenciaService.query();
        }

        function listarLocais() {
            vm.locais = LocalService.query();
        }

        function adicionarCorrespondencia() {
            vm.correspondencias.push({
                local: vm.correspondencia.local,
                data: vm.correspondencia.data,
                unidade: {
                    bloco: vm.correspondencia.unidade.bloco,
                    apartamento: vm.correspondencia.unidade.apartamento
                }
            });
            vm.correspondencia = {};
            CorrespondenciaService.save(vm.correspondencia);
        }
    }

}());
