const mongoose = require('mongoose');
const {Schema} = mongoose;
const passportlocalmongoose = require('passport-local-mongoose');

const userSchema = new Schema({
 name : String,
 department : String,
 rollNo : Number,
 semester : Number,
 email : {
    type : String,
    required : true,
    unique : true
  },
 githubLink : String,
 linkedInLink : String,
 image: String,
  notes : [{ 
  name : String,
  downloadLink : String,
   }] 
})

userSchema.plugin(passportlocalmongoose);

module.exports = mongoose.model('user',userSchema) 