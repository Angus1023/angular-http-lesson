angular.service('peopleService', ['errorHandler', function(errorHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get('https://IKnowAllThePeoples.com/AnyPeople/' + peopleNum).then(function(response){
				return response.data.people;
			},function(data, status, headers, config){
				errorHandler(data);
			})
		}
	}
}]);