var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var DonorsController = require('./donorController.js');
//middleware
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bloodDonation');
var db = mongoose.connection;

app.post('/api/postDonor', DonorsController.handler.sendDonorsInfo);
app.get('/api/getDonors', DonorsController.handler.getAllDonors);

app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;