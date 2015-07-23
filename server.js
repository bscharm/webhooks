var options = require('minimist')(process.argv.slice(2));
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = parseInt(options.port) || 5050;

app.get('/', function(req, res) {
	fs.readFile('./webhooks.json', function(err, data) {
		var json;
		if (err) {
			fs.writeFile('webhooks.json', '[]', function(err) {
				if (err) throw err;
			});
			json = '[]';
			json = JSON.parse(json);
			res.send(json);
			return;
		}
		json = JSON.parse(data);
		json = json.reverse();
		res.send(json);
	});
});

app.get('/reset', function(req, res) {
	fs.writeFile('webhooks.json', '[]', function(err) {
		if (err) throw err;
	});
	res.redirect('/');
});

app.post('/', function(req, res) {
	fs.readFile('./webhooks.json', function(err, data) {
		json = JSON.parse(data);
		json.push(req.body);
		fs.writeFile('webhooks.json', JSON.stringify(json), function(err) {
			if (err) throw err;
		})
	});
	res.send('OK');
});

console.dir("Listening on port:" + port);
app.listen(port);
