
var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');

var methods = require('./app/methods/methods');

var app = http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    
}).listen(port, '0.0.0.0');

module.exports = app;