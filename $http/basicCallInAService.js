angular.service('peopleService', ['errorHandler', function(errorHandler, $http){
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get('https://IKnowAllThePeoples.com/getAnyPeople/' + peopleNum)
				.then(function(response){
				    return response.data.people;
			     })
		}
	}
}]);

//{
//	"people": {
//		"name": "Joe"
//	}
//}