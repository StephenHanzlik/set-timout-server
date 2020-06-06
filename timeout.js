var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    var timeoutParam = url.parse(req.url, true).query['setTimeout'];

      setTimeout(function(){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`Success with timeout interval ${timeoutParam}`);
        res.end();
      }, timeoutParam)
      
});

server.listen(process.env.PORT || 5000);

console.log(`Node.js web server at port ${process.env.PORT || 5000} is running..`)
