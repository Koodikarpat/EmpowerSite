var express = require('express');
var router = express.Router();

var myMonth;
var months = {Tammikuu : 1, Helmikuu: 2, Maaliskuu: 3, Huhtikuu: 4, Toukokuu: 5, Kesäkuu: 6,
                Heinäkuu: 7, Elokuu: 8, Syyskuu: 9,
                Lokakuu: 10, Marraskuu: 11, Joulukuu: 12}

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/kulutus';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kulutus');
});

router.post('/', function(req, res, next){
    console.log("got some");
    console.log(req.body)
    if (req.body.year != null){
        console.log("got month");
        myMonth = months[req.body.month];
        var year1 = parseInt(req.body.year);
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var coll = db.collection(req.body.address);
            var values = coll.find({year:year1}).toArray((err, result)=> {
               var month = result[0].months[0][req.body.month.toLowerCase()];
               var obj = {month:months[req.body.month], year:req.body.year, results:month}
               console.log(obj)
               res.send(obj);
               //console.log(result[0].months[0].tammikuu);
            });
            db.close();
        });
    }
    else if (req.body.osoite != null){
        console.log("got address");
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            var coll = db.collection("locations");
            var values = coll.find({address:req.body.osoite}).toArray((err, result)=> {
                if (result.length != 0){
                    var local = result[0].vuodet;
                    console.log(local);
                    res.send(local);
                }
                else{
                    console.log("tyhjää")
                    res.send([])
                }
               //console.log(result[0].months[0].tammikuu);
            });
            db.close();
        });
    }
});

module.exports = router;
