var express = require('express');
var app = express();
var quotes = require('./quotes');

app.use(express.static(__dirname + '/public'));

app.get('/quotes', function(req, res){
  var chosenString = quotes[Math.floor(Math.random()*quotes.length)];
  res.send(chosenString);
});

app.get('/api/quotes', function(req, res){

  res.send(quotes);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server is running");
});
