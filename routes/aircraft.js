var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  let results = [
    {
      model: "Boeing 737",
      manufacturer: "Boeing",
      passenger_capacity: 189
    },
    {
      model: "Airbus A320",
      manufacturer: "Airbus",
      passenger_capacity: 180
    },
    {
      model: "Boeing 787",
      manufacturer: "Boeing",
      passenger_capacity: 330
    }
  ];

  res.render('aircraft', {
    title: 'Search Results Aircraft',
    results: results
  });
});

module.exports = router;