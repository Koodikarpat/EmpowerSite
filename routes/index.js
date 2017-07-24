var express = require('express');
var router = express.Router();
var data1 = require("../days.json");
var data2 = require("../hours.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kulutus');
});

router.post('/', function(req, res, next){
    console.log("got some")
    console.log(req.body);
    if (req.body.year != null){
        res.send(data1)
    }
    else if (req.body.day != null) {
        res.send(data2)
    }
});

module.exports = router;
