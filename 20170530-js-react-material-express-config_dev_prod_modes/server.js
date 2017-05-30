// Module dependencies.
var express = require('express'),
 compression = require('compression');

// Configuration
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(compression());
var http = require('http').Server(app);

// VIEW Routes
app.use('/', express.static('./public'));

// REST
app.get('/api/status', function (req, res) {
  var status = "ONLINE (v1.0.0)";
  res.send(status);
});

// Start server
var server = http.listen(app.get('port'), function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
