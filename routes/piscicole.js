var express = require('express');
//var groupe = require ('../models/groupe.model')
var router = express.Router();
/**
/* GET home page. */
router.route("/admin/groupe")
    .get(async function(req, res, next) {
    res.render('piscicole');
    });

router.route("/admin/groupe")
    .post(async function(req, res, next) {
        
    console.log(req.body)
    //res.render('piscicole');
});


module.exports = router;
 