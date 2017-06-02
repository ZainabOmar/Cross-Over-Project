var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

var UsersController = require('./Users/userController.js');
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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/company');
var db = mongoose.connection;

app.post('/api/postDonor:userId', UsersController.handler.sendDonorsInfo)

app.listen(process.env.PORT || 3300);
console.log('Running on port 3300...');

module.exports = app;