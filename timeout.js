var http = require('http'); // 1 - Import Node.js core module
var url = require('url');

var server = http.createServer(function (req, res) {   // 2 - creating server

    var timeoutParam = url.parse(req.url, true).query['setTimeout'];

      setTimeout(function(){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write(`Success with timeout interval ${timeoutParam}`);
        res.end();
      }, timeoutParam)

});

server.listen(process.env.PORT || 5000);

console.log(`Node.js web server at port ${process.env.PORT || 5000} is running..`)
