var express = require('express');

var app = express();

var port = 5000

var number = "" + randomNumber(2,4)

app.use(express.static('public'))

app.listen(port, function(){
   console.log("Listening on", port)
});

app.get('/random', function(req, res){
  res.send(number);
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
} 