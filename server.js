var http = require('http');

var server = http.createServer(function (req, res) {
    res.write('Hello World')
    res.end()
    /*if (req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Hello World</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
    */
});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')
