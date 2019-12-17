const Root = require('../models/root.model');
const User = require('../models/user.model');

exports.rootQueries = class {
 
    static setAdmin(data){
        return new Promise( async (next)=>{
            const user  = await User.findById(data);
            user.role =" admin";
            user.save().then((user)=>{
                next({etat: true, user: user})
            }).catch((err)=>{
              next({etat: false, erreur: err})
            });
        })
    }


    static UnsetAdmin(data){
        return new Promise( async (next)=>{
            const user  = await User.findById(data);
            user.role ="member";
            user.save().then((user)=>{
                next({etat: true, user: user})
            }).catch((err)=>{
              next({etat: false, erreur: err})
            });
        })
    }


};