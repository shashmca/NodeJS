var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	switch (request.url) {
		case '/' : getStaticFileContent(response, 'public/home.html', 'text/html');
			break;
		case '/aboutus' : getStaticFileContent(response, 'public/aboutus.html', 'text/html');
			break;
		case '/contactus' : getStaticFileContent(response, 'public/contactus.html', 'text/html');
			break;
		default : response.writeHead(404, {'content-type':'text/plain'});
			response.end('404 - Page not found');
			break;			
	}
}).listen('4054');

function getStaticFileContent(response, filepath, contentType) {
	fs.readFile(filepath, function(err , data) {
		if(err) {
			response.writeHead(500, {'content-type':'text/plain'});
			response.end('500 - Internal server error');
		}
		if(data) {
			response.writeHead(200, {'content-type':'text/html'});
			response.end(data);	
		}
	})
}