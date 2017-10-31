var express = require('express');
var app = express();

app.get('/api', function(req, res) {
    res.send('success');
})
app.get('/api/data', function(req, res) {
    res.send({a:'hello'});
})
app.get('/api/test', function(req, res) {
    res.send({b:'test'});
})

app.listen('3000');