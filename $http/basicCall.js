

$http.post('https://AnyUrlCanGoHere.com/get/Dogs')
.then(function(dogs){
	var status = dogs.status;
	var data = dogs.data;
})


$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/get/Dogs',
}).then(function(response){
	var status = response.status;
	var data = response.data;
})