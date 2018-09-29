var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var allentriesRouter = require('./routes/allentries');
var addentryRouter = require('./routes/addentry');
var app = express();
var config = require('./config');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/allentries', allentriesRouter);
app.use('/add', addentryRouter);

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
//Start listening for connections
const port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});
const mongoose = require('mongoose');
// Actually connect to the database (lets use a promise)
mongoose.connect(config.getDbConnectionString(), {useNewUrlParser: true}).then(() => {
        console.log("Successfully connected to the database.");
    },
    err => {
        console.log("ERROR connecting to the database.");
        throw err;
    }
);


module.exports = app;
