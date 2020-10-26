var cors = require("cors");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var controllers = require('./controllers/index')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', controllers.home.index);
app.get('/users', controllers.user.all);
app.get('/user/get/:id', controllers.user.get);
app.post('/user/create', controllers.user.create);
app.post('/user/update', controllers.user.update);
app.post('/user/delete', controllers.user.delete);

app.get('/work-performance', controllers.workPerformance.all);
app.get('/work-performance/get/:id', controllers.workPerformance.get);
app.get('/work-performance/user/:userid', controllers.workPerformance.getUserPerformance);
app.post('/work-performance/create', controllers.workPerformance.create);
app.post('/work-performance/update', controllers.workPerformance.update);
app.post('/work-performance/delete', controllers.workPerformance.delete);

app.get('/api/test', controllers.api.test.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
