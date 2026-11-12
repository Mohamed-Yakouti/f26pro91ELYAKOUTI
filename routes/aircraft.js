var express = require('express');
var router = express.Router();
const aircraft_controlers = require('../controllers/aircraft');

/* GET aircrafts view */
router.get('/', aircraft_controlers.aircraft_view_all_Page);

module.exports = router;