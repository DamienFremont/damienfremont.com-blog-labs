
/**
 * Module dependencies.
 */

var express = require('express')
  , todoRepository = require('./routes/todoRepository')
  , todoService = require('./routes/todoService')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// rest server
app.get('/api/todos', todoService.list);
app.put('/api/todos', todoService.save);

// start
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
