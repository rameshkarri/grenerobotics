angular.module('greenRobotics', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('greenRobotics').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("dashboard", {

    });
    $stateProvider.state("signup", {
        url: '/signup',
        templateUrl: "app/views/signup_1.html",
        controller: function($scope, $state) {
            $scope.gotoStep2 = function() {
                $state.go('signupContinue');
            };
        }

    });
    $stateProvider.state("signupContinue", {

        url: '/signupContinue',
        templateUrl: "app/views/signupContinue.html",
        controller: function($scope, $state) {
            $scope.gotoStep3 = function() {
                $state.go('tasklistview');
            };
        }

    });
    $stateProvider.state("tasklistview", {

        url: '/taskList',
        templateUrl: "app/views/taskList.html",
        controller: function($scope, $http) {

            $http.get("app/data/tasklists/taskslistdata.json").
            success(function(response) {

                $scope.tasklistData = response;
                $scope.detailsContentShow = false;
                $scope.contentShow = false;

                $scope.detailsContent = function(data) {
                    console.log(data);
                    $scope.detailsContentShow = true;
                    $scope.detaildata = data;

                };
            });
        }

    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('greenRobotics').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
