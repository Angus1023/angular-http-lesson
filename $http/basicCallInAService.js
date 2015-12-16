app.service('peopleService', function(errorHandler, $http){

		this.getAnyPeople = function (){
			var promise = $http.get('https://IKnowAllThePeoples.com/getAnyPeople/');
            
            promise.then(function(response){
                return response.data.people;
            });
                
            return promise;
		}
	
});

//{
//  "count": 17,
//	"people": [{
//		"name": "Joe"
//	}...]
//    
//}