var foo = 123;

var callback = function(response){
	var status = response.status;
	var data = response.data;
	if(foo === 345){

	}
}
$http.get('https://AnyUrlCanGoHere.com/api/AnyDataRequest')
.then(callback)

foo = 345;











$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/get/AnyDataRequest'
}).then(function(response){
	var status = response.status;
	var data = response.data;
})