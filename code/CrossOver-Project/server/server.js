var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var DonorsController = require('./donorController.js');
//middleware
app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.json());

//socket.io
let http = require('http').Server(app);
let io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('The user is connected');
  socket.on('disconnect', function(){
    console.log('The user is disconnected');
  });
   socket.on('add-message', (message) => {
	console.log(message)
    io.emit('message', {type:'new-message', text: message});   
  });
});



// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bloodDonation');
var db = mongoose.connection;

app.post('/api/postDonor', DonorsController.handler.sendDonorsInfo);
app.get('/api/getDonors', DonorsController.handler.getAllDonors);

app.listen(process.env.PORT || 8000);
console.log('Running on port 8000...');

module.exports = app;