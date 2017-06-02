var Donor = require('./donorModule.js');

module.exports.handler = {

	sendDonorsInfo: function (req, res) {
		var donor = req.body;
    console.log("hello " + donor.firstName)
		Donor.findOne({email: donor.email})
		.exec(function (err, don) {
			if (don) {
				res.json('Email already exist');
			} else {
          // make a new donor 
          Donor.create({
          	firstName: donor.firstName,
          	lastName: donor.lastName,
          	email:donor.email,
          	contactNumber:donor.contactNumber,
          	bloodGroup: donor.bloodGroup
          }, function (err, newDonor) {
              // create token to send back for auth
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
