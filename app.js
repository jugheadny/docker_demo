'use strict';

var express = require('express');
var os = require('os');

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
	res.send('<html><body>Hello from Node.js container '+ hostname +'</body></html>');
});

app.listen(8080);
module.exports.getApp = app;
console.log('Running on http://localhost')