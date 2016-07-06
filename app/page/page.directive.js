(function () {
    'use strict';
    angular.module('app')
        .directive('pageView', PageView);

    PageView.$inject = ['Page'];

    function PageView() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            controller: function (Page, $scope) {
                Page.setTitle($scope.title);
            },
            template: '<section class="appview" ng-transclude></section>',

        }
    }
}());
