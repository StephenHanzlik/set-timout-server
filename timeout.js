var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    if (req.url == '/') { //check the URL of the current request

      setTimeout(function(){
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // set response content
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
      }, 120000)

   }
   else
      res.end('Invalid Request!');

});

server.listen(process.env.PORT || 5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
