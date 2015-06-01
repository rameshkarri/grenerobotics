'use strict';
angular.module('greenRobotics')
    .controller('tasklistController', function($scope, $route, $http) {

        $scope.currentTasklist = $route.current.originalPath.split('/')[2];
        $http.get("app/data/tasklists.taskslistdata.json").
        success(function(response) {
            //$scope.tasklistData = response;
        });
        

    });
