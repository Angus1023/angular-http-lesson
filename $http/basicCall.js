
var handleData = function(response){
	var status = response.status;
	var data = response.data;
}

$http.get('https://AnyUrlCanGoHere.com/api/AnyDataRequest')
	.then(handleData)

$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/api/AnyDataRequest'
}).then(function(response){
	var status = response.status;
	var data = response.data;
})