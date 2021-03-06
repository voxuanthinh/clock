// Load the http module to create an http server.
var http = require('http'),
	url = require("url"); 
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain","Access-Control-ALlow-Origin":"*" });
  var _get = url.parse(request.url, true).query;
  var output = parseInt(_get['data']) * 5; 
  response.end(output.toString());
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
