

var promise = $http.get('https://AnyUrlCanGoHere.com/api/dogs');

promise.then(function(results){
	var status = results.status;
	var dogs = results.data;
})


var promise = $http({
	url: 'https://AnyUrlCanGoHere.com/api/Dogs',
	method: "GET",
    data: {name: 'Mee sir'}
});
promise.then(function(response){
	var status = response.status;
	var data = response.data;
})