
var express = require('express');
var router = express.Router();
//var app = express();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);
//var path = require('path');
var userdb=require('../db');
var a;
var userlist=[];


//var username;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('savio', { title: 'Express' });
});
router.post('/', function(req, res, next) {
user=req.body.user;
  console.log("reached1");
  //socket.username=user;
  console.log("reached2");
userdb.insert({userlist:user},function(err,newuserindb)
{
 console.log("saved user:"+user);
 //console.log(socket.username);
});
  function ab(){
    var user=document.getElementById("use");
    console.log("disconnected:"+user.value);
    userdb.remove({userlist:user.value},function(err,newuserindb)
    {
      console.log("deleted:"+user.value);
    })
  };


res.render('chat', {username: user});
  return false;
});
/*io.on('connection', function(socket){
socket.on('chat message', function(users,data){
io.emit('chat message',users,data);
  console.log(data);
});
  socket.on('img message', function(users,data){
    io.emit('img message',users,data);
    console.log();
  });

});*/
module.exports = router;
