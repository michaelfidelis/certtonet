(function () {
    'use strict';
    angular.module('app')
        .controller('AnuncioController', AnuncioController);

    AnuncioController.$inject = ['AnuncioService'];

    function AnuncioController(AnuncioService) {
        var vm = this;
        vm.anuncios = [];
        vm.locais = [];

        vm.listarAnuncios = listarAnuncios;
        vm.adicionarAnuncio = adicionarAnuncio;
        vm.listarLocais = listarLocais;

        vm.listarAnuncios();

        function listarAnuncios() {
            vm.anuncios = AnuncioService.query();
        }

        function listarLocais() {
            vm.locais = LocalService.query();
        }

        function adicionarAnuncio() {
            vm.anuncios.push({
                local: vm.anuncio.local,
                data: vm.anuncio.data,
                unidade: {
                    bloco: vm.anuncio.unidade.bloco,
                    apartamento: vm.anuncio.unidade.apartamento
                }
            });
            vm.anuncio = {};
            AnuncioService.save(vm.anuncio);
        }
    }

}());
