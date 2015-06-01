angular.module('greenRobotics').controller('greneRoboticsCtrl', ['$scope', '$state', function($scope, $state) {

    $state.go('signup');
    $scope.detailsContentShow = false;
    $scope.contentShow = false;

    /*$scope.detailsContent = function() {
    	alert('test');
        $scope.detailsContentShow = true;

    };
*/
}]);
