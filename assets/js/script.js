(function () {
    'use strict';
    $(".button-collapse").sideNav();
    $('select').material_select();
    $('.modal-trigger').leanModal();
})();

console.log('Registrando componentes JS em outro contexto...');
$('.modal-trigger').leanModal();

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({
        delay: 50
    });

});
