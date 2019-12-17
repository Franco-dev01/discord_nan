const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    photo:{type:String},
    name:{type:String, required:true},
    email:{type:String,unique: true, required:true},
    password:{type:String},
    role:{type:String, default:"member"}
});
module.exports = mongoose.model('user',UserSchema);
