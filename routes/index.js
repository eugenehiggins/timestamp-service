var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/:date')
    .get(function (req, res) {

      var param = req.params.date;

      if(!isNaN(param)){
        var unixtimeInt = Number.parseInt(param);
        var date = new Date(unixtimeInt * 1000);
        var month = date.toLocaleString("en-us", { month: "long"});
        var day = date.getDate();
        var year = date.getFullYear()

        res.send(JSON.stringify({ "unix": unixtimeInt , "natural": month +" "+ day +" "+ year }));
      } else {

      }
    });


module.exports = router;
