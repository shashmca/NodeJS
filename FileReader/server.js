var http = require('http');
var fs = require('fs');



http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  //response.end('<h1>Hello Shashank</h1>\n');
  
  // To read a file synchronously 
  /*var contents = fs.readFileSync('server.js').toString();
  response.end(contents);*/

  // To read a file asynchronously 
  fs.readFile('dummy.txt', function(err, buf) {
  	response.end(buf.toString());
  })

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');

// Callback Insanity: means callback inside callback inside callback. To avoid this we should use promises.

