var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Stonehenge\n');
}).listen(process.env.PORT); // Not sure if process.env.PORT is specific to Cloud 9

