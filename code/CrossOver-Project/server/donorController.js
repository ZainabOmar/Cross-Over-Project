var Donor = require('./donorModule.js');

module.exports.handler = {

	sendDonorsInfo: function (req, res) {
		var donor =   {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email:req.body.email,
      contactNumber:req.body.contactNumber,
      bloodGroup: req.body.bloodGroup,
      address: req.body.address,
      geoC: req.body.geoC
    };

    Donor.findOne({email: donor.email})
    .exec(function (err, don) {
     if (don) {
      res.json('Email already exist');
    } else {
      Donor.create(donor, function (err, newDonor) {
        if(err){
          console.log("error " + err)
          res.status(500).send(err);
        } else {
         res.json({newDonor}); 
       }    
     });
    }
  });
  },

  getAllDonors: function (req, res) {
    Donor.find({}, function(err, donors) {
      if(err){
        res.status(500).send("something went wrong " + err)
      }else {  
        res.json(donors);
      }
    });
  }
}
