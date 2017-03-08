angular.controller('PeopleController', ["peopleService",function($scope, peopleService){
	
    //Q1a - Q3b
    var promise = peopleService.getAnyPeople()
   
    var whenDataComesBackCallbackFunction = function(people){
        $scope.data = people;
    };
    //A2
    promise.then(whenDataComesBackCallbackFunction)
}])

app.service('peopleService', function($http){

        //Q1b
		this.getAnyPeople = function (){
            //Q2
			var promise = $http.get('https://IKnowAllThePeoples.com/getAnyPeople/');
            
            // var response = {
            //     status: 200,
            //     data: {
            //         message: "It worked",
            //         people: [
            //             {},
            //             {},
            //             {},
            //         ]
            //     }
            // }

            //A1
            promise.then(function(response){
                return response.data.people;
            });

            //Q3a    
            return promise;
		}
	
});

//{
//  "count": 17,
//	"people": [{
//		"name": "Joe"
//	}...]
//    
//}