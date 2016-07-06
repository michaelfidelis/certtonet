(function () {
    'use strict';
    angular.module('app')
        .controller('ReservaController', ReservaController);

    ReservaController.$inject = ['ReservaService'];

    function ReservaController(ReservaService) {
        var vm = this;
        vm.reservas = [];
        vm.locais = [];

        vm.listarReservas = listarReservas;
        vm.adicionarReserva = adicionarReserva;
        vm.listarLocais = listarLocais;

        vm.listarReservas();

        function listarReservas() {
            vm.reservas = ReservaService.query();
        }

        function listarLocais() {
            vm.locais = LocalService.query();
        }

        function adicionarReserva() {
            vm.reservas.push({
                local: vm.reserva.local,
                data: vm.reserva.data,
                unidade: {
                    bloco: vm.reserva.unidade.bloco,
                    apartamento: vm.reserva.unidade.apartamento
                }
            });
            vm.reserva = {};
            ReservaService.save(vm.reserva);
        }
    }

}());
