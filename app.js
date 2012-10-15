
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , userRoutes = require('./routes/userApp')
  , searchRoutes = require('./routes/searchApp');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 8090);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'booksroom'}));
  
  //session 
  app.use(function(req, res, next) {
    res.locals.userId= req.session.userId;
    res.locals.message = req.session.message;
    res.locals.apiKey = req.session.apiKey;
    next();
  });
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

// user router
app.post('/login', userRoutes.login);
app.post('/register', userRoutes.register);
app.get('/logout', userRoutes.logout);

//search router
app.all('/search',searchRoutes.main);
app.all('/search/booklist', searchRoutes.bookSearchList);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
