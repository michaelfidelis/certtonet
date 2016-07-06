(function () {
    'use strict';
    angular.module('app')
        .controller('NoticiaController', NoticiaController);

    NoticiaController.$inject = ['NoticiaService'];

    function NoticiaController(NoticiaService) {
        var vm = this;
        vm.noticias = [];

        vm.listarNoticias = listarNoticias;
        vm.adicionarNoticia = adicionarNoticia;
        vm.verNoticia = verNoticia;

        vm.listarNoticias();

        function listarNoticias() {
            vm.noticias = NoticiaService.query();
        }

        function adicionarNoticia() {
            vm.noticias.push({
                titulo: vm.noticia.titulo,
                mensagem: vm.noticia.mensagem
            });
            vm.noticia = {};
            NoticiaService.save(vm.noticia);
        }

        function verNoticia(index) {
            vm.noticia = vm.noticias[index];
            openModal('#modalNoticia');
        }
    }

}())
