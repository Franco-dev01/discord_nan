const mongoose = require('mongoose');

const GroupeSchema = new mongoose.Schema({
    nom:{type:String},
    description:{type:String, required:true},
    users:[{type:mongoose.Schema.Object , ref:'user'}],
    text:{type:String},
    logo:{type:String},
    messages:[{
        users:{type:mongoose.Schema.Object , ref:'user'},
        ressource:{type:String},
    }],
    admin:{type:mongoose.Schema.Object , ref:'user'},
    isPrivate:{type:Boolean,default:false}
});
module.exports = mongoose.model('groupe',GroupeSchema);
