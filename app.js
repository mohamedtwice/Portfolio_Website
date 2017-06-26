var express = require('express');
var path = require('path');
var app = express();
// var router = express.Router();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var port = process.env.PORT || 3004;

app.listen(port, function() {
  console.log('up on', port);
});
