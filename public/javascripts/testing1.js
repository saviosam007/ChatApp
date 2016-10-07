var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
function a(){
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg + " (checked by server)");
  });
});

http.listen(3500, function(){
  console.log('savio listening on *:3000');
});

}

	  var socket = io.connect('http://localhost:3500');
      $('form').submit(function(){
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
	  return false;
      });
      socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg));
      });