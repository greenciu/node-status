var express	= require('express'),
  http		= require('http'),
  path		= require('path'),
  status	= require('./routes/status');

var config = require('./config/config');

var app = express();
app.set('port', process.env.PORT || 7777);
app.set('env', 'development');

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.favicon());

app.get(config.prefix + '/status', status.state);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});