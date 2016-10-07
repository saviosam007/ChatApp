var express = require('express');
var router = express.Router();
var meshDb = require("../db");

//called via browser URL
router.get('/create', function(req, res, next) {
  
  res.render('mesh', { title: 'Draft'});
});

//called via browser URL
router.get('/view', function(req, res, next) {

	var meshId = req.query.id;
	
	meshDb.find({_id:meshId},function(err,meshes) {

	
		res.render('mesh', { title: 'Some Model: ' + meshes[0].name });
	
	});
	
	
    
});

//called via three.js ajax call to load model
router.get('/model', function(req, res, next) {
    
	var mesh = {}
	
	res.send(mesh);
});

//called via form post
router.post('/save', function(req, res, next) {

	var mesh = {} //build req.body
	
	//save mesh
	meshDb.insert(mesh, function(err, newMeshinDb) {
	
	if (!err)
		res.send("everything is cool man");
	else
		res.send("Sorry dude");
	});
  
});

module.exports = router;
