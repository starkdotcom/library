var createError = require('http-errors');
var express = require('express');
const expressLayouts = require('express-ejs-layouts')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');
var authorsRouter = require('./routes/authors');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var addRouter = require('./routes/add');


var app = express();
app.use(expressLayouts);
app.set('layout', './layout');
/*var handlebars = require('express-handlebars').create({
  layoutsDir: path.join(__dirname, "views"),
  partialsDir: path.join(__dirname, "views"),
  defaultLayout: 'layout',
  extname: 'ejs'
});*/
// view engine setup
//app.engine('ejs', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/add', addRouter);

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
