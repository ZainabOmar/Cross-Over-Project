var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  UserType:{
    type:Boolean
  },
  firstName:{
   type:String,
   required:true  
 },
 lastName:{
   type:String,
   required:true  
 },
 email:{
   type:String,
   required:true 
 },
 contactNumber:{
  type:Number,
  required:true
},
bloodGroup:{
  type:String,
  required: true
}

});


var user = mongoose.model('user', userSchema);

module.exports = user;