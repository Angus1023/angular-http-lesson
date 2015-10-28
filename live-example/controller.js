angular.module('httpApp').controller('myCtrl', function($scope, myService){
    $scope.test = "Working"
    
    var myVar = myService.getPeople()
        .then(function(people){
            $scope.swpeople = people;
        });
});