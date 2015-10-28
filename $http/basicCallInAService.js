angular.service('peopleService', function(errorHandler, $http){

		this.getAnyPeople = function (){
			return $http.get('https://IKnowAllThePeoples.com/getAnyPeople/' peopleNum)
				.then(function(response){
				    return response.data.people;
			     })
		}
	
});

//{
//  "count": 17,
//	"people": [{
//		"name": "Joe"
//	}...]
//    
//}