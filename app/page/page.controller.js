(function () {
    'use strict';
    angular.module('app')
        .controller('PageController', PageController);

    PageController.$inject = ['Page'];

    function PageController(Page) {
        var pageController = this;

        pageController.getTitle = function () {
            return Page.getTitle();
        }
    }
}());
