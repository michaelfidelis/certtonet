(function () {
    'use strict';
    angular.module('app')
        .service('Page', Page);

    function Page() {
        var title = "";
        return {
            getTitle: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle
            }
        };
    };

}());
