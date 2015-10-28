angular.module('httpApp').controller('myCtrl', function($scope, myService){
    $scope.test = "Working"
    
    $scope.isLoading = true;
    var promise = myService.getPeople();
    
        promise.then(function(people){
            $scope.swpeople = people;
            $scope.isLoading = false;
        });
});