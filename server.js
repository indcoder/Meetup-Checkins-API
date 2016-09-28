var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');1
var cors = require('cors');
var routes = require('./routes/index');
var mongoose = require('mongoose');
var config = require('./config.js');
var db;
var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


if(process.env.NODE_ENV === "test"){
	db = mongoose.connect(config.test_db);
	app.listen(config.test_port);
	console.log("App listening on port " + config.test_port);
}else{
 	db = mongoose.connect(config.db);
 	app.listen(config.port);
 	console.log("App listening on port " + config.port);
}

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});


module.exports = app;
