


var dogs = $http.get('https://AnyUrlCanGoHere.com/get/Dogs').then(function(dogs){
	var status = dogs.status;
	var data = dogs.data;
})


$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/get/Dogs',
}).then(function(dogs){
	var status = dogs.status;
	var data = dogs.data;
})