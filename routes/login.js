var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req,res) {
    console.log(req.body);
res.render('success', { title: 'Welcome'});
});
module.exports = router;
