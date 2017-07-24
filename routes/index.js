var express = require('express');
var router = express.Router();
var data1 = require("../days.json");
var data2 = require("../hours.json");
var data3 = require("../data.json");
var myMonth;
var months = {Tammikuu : 1, Helmikuu: 2, Maaliskuu: 3, Huhtikuu: 4, Toukokuu: 5, Kesäkuu: 6,
                Heinäkuu: 7, Elokuu: 8, Syyskuu: 9,
                Lokakuu: 10, Marraskuu: 11, Joulukuu: 12}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kulutus');
});

router.post('/', function(req, res, next){
    console.log("got some");
    console.log(req.body.day);
    console.log(data3[months[req.body.month]]);
    if (req.body.year != null){
        console.log("got month");
        myMonth = months[req.body.month];
        res.send(data3[myMonth]);
    }
    else if (req.body.day != null){
        console.log("got date");
        data = data3[myMonth];
        for(var i = 1; i <= 31; i++){
            if(data[i]["date"] == req.body.day){
                var dataSend = data[i];
            }
        }
        res.send(dataSend);
    }
});

module.exports = router;
