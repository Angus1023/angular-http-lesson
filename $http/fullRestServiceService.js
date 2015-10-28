angular.service('peopleService', ['errorHandler', function(errorHandler){
    var baseUrl ='https://IKnowAllThePeoples.com/AnyPeople/';
	return {
		this.getAnyPeople = function (peopleNum){
			return $http.get(baseUrl + peopleNum).then(function(response){
                if(response.status !== 200) {
        
                }
				return response.data.people;
			},function(data, status, headers, config){
				errorHandler(data);
			})
		}
                                  
        this.deletePerson = function(personId) {
            return $http({
                method: 'DELETE',
                url: baseUrl + personId
            }).then(function(response){
                return response.data;                      
            })
        }
                                  
        this.addPerson = function(personObj) {
            return $http({
                  method: 'POST',
                  url: baseUrl,
                  data: personObj
            }).then(function(response){
                
           })                   
        }
        
        this.editPersonName = function(newValue, id){
            return $http({
                method: 'PUT',
                url: baseUrl + id + '/?name=' +newName;
            })
        }
	}
}]);