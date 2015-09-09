
var handleData = function(response){
	//console.log(response)
	var status = response.status;
	if(status === 200) {
		var data = response.data;
	}
}

$http.get('https://AnyUrlCanGoHere.com/api/AnyDataRequest')
	.then(handleData)

//////////////////////////////////////////////////////////////////////////

$http({
	method: "GET",
	url: 'https://AnyUrlCanGoHere.com/api/AnyDataRequest'
}).then(function(response){
	var status = response.status;
	if(status === 200) {
		var data = response.data;
	}
})
