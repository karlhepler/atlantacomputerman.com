
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/contact-us', routes.contactUs);
app.get('/terms-of-service', routes.termsOfService);
app.get('/privacy-statement', routes.privacyStatement);
app.get('/onsite-cost-calculator', routes.onsiteCostCalculator);
app.get('/services', routes.services);
app.get('/services/families', routes.servicesFamilies);
app.get('/services/students', routes.servicesStudents);
app.get('/services/seniors', routes.servicesSeniors);
app.get('/our-story', routes.ourStory);
app.get('/sign-up', routes.signUp);
app.get('/explanation-of-our-services', routes.explanationOfOurServices);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
