angular.service('peopleService', ['errorHandler', function(errorßHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get('https://IKnowAllThePeoples.com/getAnyPeople/' + peopleNum)
				.then(function(response){
				return response.data.people;
			})
		}
	}
}]);

{
	"people": {
		"name": "Joe"
	}
}