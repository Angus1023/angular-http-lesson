angular.service('peopleService', ['errorHandler', function(errorHandler){
    
    var baseUrl ='https://IKnowAllThePeoples.com/AnyPeople/';
	
    var successFunc = function(response){
                if(response.status !== 200) {
        
                }
				return response.data.people;
			};
    var failureFunc = function(data, status, headers, config){
				errorHandler(data);
			});
    
		this.getAnyPeople = function (peopleNum){
			return $http.get(baseUrl + peopleNum).then(successFunc, failureFunc);
		}
                                  
        this.updatePeopleName = function(name, id){
            
            return $http({
                method: 'PUT',
                url: baseUrl + id + '/?name=' + name
                //https://IKnowAllThePeoples.com/AnyPeople/456/?name=PeteSteve
            }).then( function(response){
//                response.status
//                response.data
            })
        }
        
        this.addPeople = function(personObj) {
            return $http({
                method: 'POST',
                url: baseUrl,
                data: personObj
            }).then(function(response){
                //Debug to figure out what we have
                var abc = 123;
            })
        }
        
        this.deletePeople = function(id) {
            return $http({
                method: 'DELETE',
                url: baseUrl + id
            }).then(function(response){
                //Debug to figure out what we have
                var abc = 123;
            })
        }
}]);