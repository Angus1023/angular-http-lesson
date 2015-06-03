var express = require("express");
var data = require('./data.js');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, ressponse){
	response.send("This is a basic node server running on port 3000!");
});

app.get('/api/people', function(reqeust, response){
	response.send(data.people);
});

app.get('/api/people/:id', function(reqeust, response){
	var peopleId = request.params.id;
	if(data.people.length <= id && id >= 0)
		response.send(data.people[peopleId]);
	else
		response.send("User not found");
});

app.post('/api/people', function(req, res){
	var newPeople = {
		name: req.body.name,
	    age: req.body.age,
		gender: req.body.gender
	}

	data.people.push(people);
	res.send(data.people.length - 1);
});

app.delete('api/people/:id', function(req, res){
	data.people.splice()
});

app.listen(3000);