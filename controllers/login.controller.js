const log = require('../models/user.model');

exports.LoginQueries = class {
 
static getusers(data){
    return new Promise( async (next)=>{
        log.findOne({
            email:data.email,
            password:data.password
        }).then((userLogin)=>{
            next({etat: true, users: userLogin})
        }).catch((err)=>{
            next({etat: false, erreur: err})
        })
    })
}
};