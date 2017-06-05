var mongoose = require('mongoose');

var donorSchema = new mongoose.Schema({
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
},
address: {
  type: String,
  required: true
},
geoC: {
  type: String,
  required: true
}

});


var donor = mongoose.model('donor', donorSchema);

module.exports.getAllDonors = (callback) => {
  donor.find(callback);
}

module.exports = donor;