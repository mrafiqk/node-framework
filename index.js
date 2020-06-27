var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

global.config = require('config');
global.mongoose = require('./utils/mongoose');
global.logger = require('./utils/logger');
global.Authorization = require('../utils/auth');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var PORT = process.env.PORT || '8080'

try {
  var app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());


  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  app.use(session({
    secret: config.session.secret,
    secure:false,
    key:"sid",
    cookie:config.session.cookies,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      url: config.mongoDbURL
    })
  }));


  app.use((req, res, next) => {
    next();
  })

  app.use('/',(req,res,next) => {
    next();
  }, routes);

  // error handler
  app.use((err, req, res, next) => {
    console.log(err);
    logger.error(err);
    res.status(500).json({message:"Unknown Error! Please contact administrator."})
  });

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    res.status(404).json({code: 404, message: "Not Found"})
    next(createError(404));
  });

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
  })
  app.use(express.static('dist'));
} catch (e) {
  logger.error(e);
}

module.exports = app;
