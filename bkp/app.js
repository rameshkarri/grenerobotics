angular.module('greenRobotics', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('greenRobotics').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state("dashboard", {

    });
    $stateProvider.state("signup", {
        views: {
            "": {
                url: '/signup',
                templateUrl: "app/views/signup_1.html",
                controller: function($scope, $state) {
                    $scope.gotoStep2 = function() {
                        $state.go('signupContinue');
                    };
                }
            }
        }
    });
    $stateProvider.state("signupContinue", {
        views: {
            "": {
                url: '/signupContinue',
                templateUrl: "app/views/signupContinue.html",
                controller: function($scope, $state) {
                    $scope.gotoStep3 = function() {
                        $state.go('tasklistview');
                    };
                }
            }
        }
    });
    $stateProvider.state("tasklistview", {
        views: {
            "": {
                url: '/taskList',
                templateUrl: "app/views/taskList.html",
                controller: function($scope, $http) {
                 
       /*                 $scope.currentTasklist = $route.current.originalPath.split('/')[2];*/

                    $http.get("app/data/tasklists/taskslistdata.json").
                    success(function(response) {
                      
                        $scope.tasklistData = response;
                    });
                }
            }
        }
    });
    /* $stateProvider.state("enterpriselistdetailsview", {
         views: {
             "": {
                 url: '/enterpriselistdetails',
                 templateUrl: "app/views/enterpriselistdetails.html",
                 controller: function($scope) {

                 }
             }
         }
     });*/
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
