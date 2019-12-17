const User = require('../models/user.model');

exports.UserQueries = class {
 
  static getAllusers(data){
      return new Promise( async (next)=>{
          User.find({}).then((users)=>{
              next({etat: true, users: users})
          }).catch((err)=>{
            next({etat: false, erreur: err})
          })
      })
  }
};