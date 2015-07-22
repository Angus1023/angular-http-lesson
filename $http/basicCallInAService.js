var handler = function(response){
					/*response: { 
									status: 200
						       		data: {
										people:{
											name: 'Awesome'
											title: 'Mr'
										}
									}
								}
					*/
						}}
				return {person: response.data.people, status: 200};
			}

angular.service('peopleService', ['errorHandler', function(errorHandler){
	return {
		this.getAnyPeople = function (peopleNum){
			//peopleNum: 123
			return $http.get('https://IKnowAllThePeoples.com/api/AnyPeople/'
								 + peopleNum)
				.then(handler)
		}
	}
}]);

var ticket = peopleService.getAnyPeople(123)
ticket.then(function(person){
	person.person
	person.status
})

{
	"people": {
		"name": "Joe"
	}
}