angular.module('greenRobotics').controller('coffeeHouseCtrl', ['$scope', '$state', function($scope, $state) {
    $scope.detailsContentShow = false;
    $scope.contentShow = false;

    $state.go('signup');


}]);
