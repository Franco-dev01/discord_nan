var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sharedSession = require('express-socket.io-session');
const io = require('socket.io')
const session = require('express-session')({
  secret: "amemnjesusrevient",
  resave:true,
  saveUninitialized: true
});
var loginRouter = require ('./routes/login')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var piscicoleRouter = require('./routes/piscicole')

const serveur = class {
    constructor(){
      this.app = express();
      this.shareSession = sharedSession;
      this.setting();
      this.route();
      this.middleware();
  
    }

    getApp(){
      return this.app;
    }
    getSharedSession(){
      return this.shareSession(session);
    }

  setting(){
    this.app.use(express.static(__dirname+'/public')); //On utilise ce paramettre pour dire a express ou se trouve nos fichier images | css | js. on les appels souvents des fichiers assets
    this.app.set('views', __dirname+'/views') //On utilise ce paramettre pour dire a express ou se trouve nos fichier page Template fontend
    // This section is optional and used to configure twig.
    this.app.set('view engine', 'ejs');
    this.app.use(express.json()); // pour formatter tout ce qui est envoyé en post en application/json
    this.app.use(express.urlencoded({ extended: false })) // pour crypter tout ce qui est post en application/x-www-form-urlencoded
  }



  middleware(){
    this.app.use(logger('dev'));
    this.app.use(session);
    this.app.use(cookieParser());
   
  



  }

  route(){
    this.app.use('/', indexRouter);
    this.app.use('/users', usersRouter);
    this.app.use(loginRouter);
    this.app.use(piscicoleRouter)
  }
};



module.exports = serveur;
