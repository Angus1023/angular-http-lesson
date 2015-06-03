


$http.get('https://AnyUrlCanGoHere.com/get/AnyDataRequest').then(function(response){
	var status = response.status;
	var data = response.data;
})

$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/get/AnyDataRequest'
}).then(function(response){
	var status = response.status;
	var data = response.data;
})