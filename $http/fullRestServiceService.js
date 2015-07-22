var successHandler = function(response){
				return response.data.people;
			};


angular.service('peopleService', ['errorHandler', function(myErrorHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get('https://IKnowAllThePeoples.com/AnyPeople/' + peopleNum)
			.then(successHandler,function(data, status, headers, config){
				myErrorHandler(data);
				return {data: "Sorry we couldn't help you"}
			})
		},

		this.changeAnyPeople = function(peopleName, peopleNum) {
			return $http.put('https://IKnowAllThePeoples.com/AnyPeople/' + peopleNum + '/?name=' + peopleName)
			//https://IKnowAllThePeoples.com/AnyPeople/3124219231/?name='Johnson'
					.then(function(response){
						return response.data;
					})
		},

		this.addAnyPeople = function(peopleObject){
			/*	peopleObject: {
					name: "Joe",
					lName: "Trader",
				}*/
				return $http({
								url:'https://IKnowAllThePeoples.com/AnyPeople/', 
								body: peopleObject,
								method: 'POST'
							 }
						 	);
					
		}


	}
}]);