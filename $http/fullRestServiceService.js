var successHandler = function(response){
				return response.data.people;
			};


angular.service('peopleService', ['errorHandler', function(myErrorHandler){
	return {

		var baseUrl = 'https://IKnowAllThePeoples.com/AnyPeople/';

		this.getAnyPeople = function (peopleNum){
			return $http.get(baseUrl + peopleNum)
			.then(successHandler,function(data, status, headers, config){
				myErrorHandler(data);
				return {data: "Sorry we couldn't help you"}
			})
		},

		this.updateAnyPeopleName = function (newName, id) {
            return $http({
                    method: "PUT",
                    url: baseUrl + id + "/?name=" + newName //https://IKnowAllThePeoples.com/AnyPeople/9001/?name='The Dude'     
                }).then(function(response) {
                    return response.data;              
                });               
        },

        this.addAnyPeople = function (newPerson) {
            return $http({
                method: "POST",
                url: baseUrl,
                data: newPerson
            }).then(function (response) {
                var abc = 123;                      
            });
        },
                                  
        this.deleteAnyPeople = function (id) {
            return $http({
                method: "DELETE",
                url: baseUrl + id
            }).then(function (response){
                             
            });
        }
        

	}
}]);

peopleService.updateAnyPeople('The Dude', 9001).then(function (thePerson){
    
});