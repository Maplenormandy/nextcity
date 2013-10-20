
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var partials = require('./routes/partials');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var exphbs = require('express3-handlebars');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', exphbs({defaultLayout:"main", extname:".html"}));
app.set('view engine', '.html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes.index);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/partials/stocks', partials.stocks);
app.get('/users', user.list);

io.sockets.on('connection', function(socket) {
  //socket.emit('news', {hello:'world'});
});

setInterval(function() {
  var companies = ['msft','gm','appl','goog','f', 'fb'];
  var comp = companies[(Math.random()*companies.length)>>>0];
  var data = {};
  data[comp] = 50+(Math.random()*100)>>>0;
  io.sockets.emit('stocks', data);
}, 1000);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
