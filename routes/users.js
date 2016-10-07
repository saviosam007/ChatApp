var express = require('express');
var router = express.Router();
var userdb=require('../db');
/* GET users listing. */
console.log("user controller");
router.get('/', function(req, res, next) {
  userdb.find({}, function (err, docs) {
  var user=docs;
    console.log(user[0]);
  res.render('userlist', { username: user});
  });
});

function a(){
  console.log("yo babe");
}
module.exports = router;
