angular.service('peopleService', ['errorHandler', function(errorHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get('https://IKnowAllThePeoples.com/AnyPeople/' + peopleNum).then(function(response){
				return response.data.people;
			},function(data, status, headers, config){
				errorHandler(data);
			})
		}

		this.addAnyPeople = function(peopleObject){
			return $http({
				url:"SHORTURL.com/api",
				method: 'POST',
				data: peopleObject})
			.then(function(result){
				return result.data;
			}, function(error){
				errorHandler(error);
			})
		}

	this.changeAnyPeopleName = function(peopleNum, newName){
	return $http.put("url.com/api/people/" + peopleNum + "/employer/?employername=" + newName)
	.then(function (response){
		return response.data
	})

	this.deleteAnyPeople = function(peopleNum){
		return $http({
			method: 'DELETE',
			url: 'url.com/api/people/' + peopleNum
		}).then(function (response){
			return response.data;
		})
	}
}











	}
}]);