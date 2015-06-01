angular.module('greenRobotics').directive('tasklistview', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/views/taskListview.html',

        link: function(element, scope, attrs, controller) {
            $(".myButton").click(function() {
alert('hi');
                // Set the effect type
                
                $('#myDiv').toggle(effect, options, duration);
            });

        }

    }


});
