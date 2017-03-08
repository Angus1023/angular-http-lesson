angular.service('peopleService', ['errorHandler', function(errorHandler, $http){
    
    var baseUrl ='https://IKnowAllThePeoples.com/api/AnyPeople/';

    this.getAnyPeople = function (peopleNum){
       var promise = $http({
           url: baseUrl + peopleNum,
           method: 'GET'
       });

       promise.then(function(results){
           if(results.status === 200){
             return results.data;
           } else {
             return "Error, this didn't work. Don't screw up next time."
           }
       })

       return promise;
    }
                          
         
       
}]);