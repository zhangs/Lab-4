var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {
	client.mget(['awesome', 'gnarly', 'cool', 'rad', 'groovy'], function(error, responses) {
		console.log(responses);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('awesomeCount: ' + responses[0] + '<br/> gnarlyCount:' + responses[1] +
		'<br/> coolCount:' + responses[2] +  '<br/> radCount:' + responses[3] +
		'<br/> groovyCount:' + responses[4]);		
	});
}).listen(3000);

console.log('Server running on port 3000');