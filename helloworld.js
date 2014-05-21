var serverPort = process.env.PORT; // Try to use port number from Cloud 9 config
if (serverPort === undefined)
  serverPort = 1337;

var isCloud9 = (process.env.C9_USER !== undefined);

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Stonehenge\n');
}).listen(serverPort);

if (!isCloud9)
  console.log('Server running at http://127.0.0.1:' + serverPort + '/');
//console.log(process.env);