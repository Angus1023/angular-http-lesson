angular.controller('PeopleController', ["peopleService",function($scope, peopleService){
	
    var promise = peopleService.getPeople()
   
    promise.then(function(data){
        $scope.data = data;
    })
}])