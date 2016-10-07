var express = require('express');
var router = express.Router();
var userdb=require('../db');
/* GET users listing. */
router.get('/logout?id=/', function(req, res, next) {
 // var user=document.getElementById("buttonstyle");
  //console.log("disconnected:"+user.value);
  console.log("hey:"+req.query.id);
  res.render('success', { title: 'Express' });
  /*userdb.remove({userlist:user.value},function(err,newuserindb)
  {
    console.log("deleted:"+user.value);
  }) */
});
router.post('/', function(req, res, next){
  console.log("hmm yeah");
});
module.exports = router;
