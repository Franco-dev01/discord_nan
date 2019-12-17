const mongoose = require('mongoose');

const RootSchema = new mongoose.Schema({
    photo:{type:String},
    name:{type:String, required:true},
    email:{type:String,unique: true, required:true},
    password:{type:String},
});
module.exports = mongoose.model('root',RootSchema);