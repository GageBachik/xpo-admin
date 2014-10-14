var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');
var port = process.env.PORT || 3000;

var cors = require('cors')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'Ava123!'}))
app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://xpo-admin:Ava123!@linus.mongohq.com:10064/xpo-admin');

app.get('/', indexController.index);
app.post('/api/get', cors(), apiController.get);
app.post('/api/save', apiController.save);
app.get('/auth', indexController.auth);
app.post('/auth', indexController.auth);

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
