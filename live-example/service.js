angular.module('httpApp').service('myService', function($http){
    var baseUrl = "http://pokeapi.co/api/v1/"
    
    this.getPeople = function(){
        var subUrl = "pokemon";
        
        var promsie = $http({
            method: 'GET',
            url: baseUrl + subUrl
        });
        promise.then(function(response){
            return "cat";
        })
        return promise;
        
    }
});