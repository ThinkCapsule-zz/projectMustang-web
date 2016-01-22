var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send("Worked");

	// a convenient variable to refer to the HTML directory
	var html_dir = '/components/';

	// routes to serve the static HTML files
	app.get('/demo', function(req, res) {
	    res.sendfile(html_dir + 'demo.html');
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
		console.log('Example app listening at http://%s:%s', host, port);
});