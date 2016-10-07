var express = require('express');
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var userdb=require('../db');
function a(){
    var user=document.getElementById("use");
    console.log("disconnected:"+user.value);
    userdb.remove({userlist:user.value},function(err,newuserindb)
    {
        console.log("deleted:"+user.value);
    })
};

window.onunload=a();