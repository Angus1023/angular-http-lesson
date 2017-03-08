
var promise = $http.get('http://thehappydogplace.com/api/dogs');
// $http.put('http://thehappydogplace.com/api/dogs');
// $http.post('http://thehappydogplace.com/api/dogs');
// $http.delete('http://thehappydogplace.com/api/dogs');

promise.then(function(results){
	if(status === 200){
		//Do working code
		return results.data;
	} else {
		//Handle broken result
	}
	var status = results.status;
	var dogs = results.data;
})















var promise = $http({
	url: 'https://AnyUrlCanGoHere.com/api/Dogs',
	method: "POST",
    data: {name: 'Mee sir'} //This is the body
});
promise.then(function(response){
	var status = response.status;
	var data = response.data;
})