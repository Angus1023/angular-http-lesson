var handler = function(response){
					/*response: { 
									status: 200
						       		data: {
										people:{
											id: 333,
											name: 'Awesome',
											title: 'Mr'
										}
									}
								}
					*/
					
						var people = response.data.people;
						people.coolness = 9.5;
				return people;
			}

angular.service('peopleService', ['errorHandler', function(errorHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			//peopleNum: 123
		var url = 'https://IKnowAllThePeoples.com/api/AnyPeople/' + peopleNum;
		//'https://IKnowAllThePeoples.com/api/AnyPeople/333'

			return $http({
					url: url,
					method: 'GET'
				})
				.then(handler)
		}
	}
}]);

angular.controller('mycontroller', function($scope, peopleService){
	peopleService.getAnyPeople(333).then(function(myPeople){
		/*myPerson: {
											id: 333,
											name: 'Awesome',
											title: 'Mr'
										}*/

		$scope.thePersonWeCareAbout = myPeople;

	});
})

{
	"people": {
		"name": "Joe"
	}
}


// var ticket = peopleService.getAnyPeople(123)
// ticket.then(function(person){
// 	person.person
// 	person.status
// })
