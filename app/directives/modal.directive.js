    angular.module("app")
        .directive("modal", ["$compile", "$timeout", function ($compile, $timeout) {
            return {
                scope: {
                    dismissible: "=",
                    opacity: "@",
                    inDuration: "@",
                    outDuration: "@",
                    ready: '&?',
                    complete: '&?',
                    open: '=?',
                    enableTabs: '@?'
                },
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        var modalEl = $(attrs.href ? attrs.href : '#' + attrs.target);
                        $compile(element.contents())(scope);

                        var complete = function () {
                            angular.isFunction(scope.complete) && scope.$eval(scope.complete());

                            scope.open = false;
                            scope.$apply();
                        };
                        var ready = function() {
                          angular.isFunction(scope.ready) && scope.$eval(scope.ready());
                          // If tab support is enabled we need to re-init the tabs
                          // See https://github.com/Dogfalo/materialize/issues/1634
                          if (scope.enableTabs) {
                             modalEl.find('ul.tabs').tabs();
                          }
                        };
                        var options = {
                            dismissible: (angular.isDefined(scope.dismissible)) ? scope.dismissible : undefined,
                            opacity: (angular.isDefined(scope.opacity)) ? scope.opacity : undefined,
                            in_duration: (angular.isDefined(scope.inDuration)) ? scope.inDuration : undefined,
                            out_duration: (angular.isDefined(scope.outDuration)) ? scope.outDuration : undefined,
                            ready: ready,
                            complete: complete,
                        };
                        element.leanModal(options);

                        // Setup watch for opening / closing modal programatically.
                        if (angular.isDefined(attrs.open) && modalEl.length > 0) {
                          scope.$watch('open', function(value, lastValue) {
                            if (!angular.isDefined(value)) { return; }
                            (value === true) ? modalEl.openModal(options) : modalEl.closeModal();
                          });
                        }
                    });
                }
            };
        }]);
