var express = require('express');
var router = express.Router();

var outputDate = function(date) {
    var month = date.toLocaleString("en-us", { month: "long"});
    var day = date.getDate();
    var year = date.getFullYear()

    return JSON.stringify({ "unix": date.getTime()/1000 , "natural": month +" "+ day +" "+ year })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/:date')
    .get(function (req, res) {
        var param = req.params.date;

        var date;

        if(!isNaN(param)){
            var unixtimeInt = Number.parseInt(param);
            date = new Date(unixtimeInt * 1000);

        } else {
            var dateStr = param;
            date = new Date(param);
            //console.log(date);
        }

        res.send(outputDate(date));
    });


module.exports = router;
