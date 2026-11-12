var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var aircraft_controller = require('../controllers/aircraft');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// AIRCRAFT ROUTES ///
// POST request for creating an Aircraft.
router.post('/aircraft', aircraft_controller.aircraft_create_post);
// DELETE request to delete Aircraft.
router.delete('/aircraft/:id', aircraft_controller.aircraft_delete);
// PUT request to update Aircraft.
router.put('/aircraft/:id', aircraft_controller.aircraft_update_put);
// GET request for one Aircraft.
router.get('/aircraft/:id', aircraft_controller.aircraft_detail);
// GET request for list of all Aircraft items.
router.get('/aircraft', aircraft_controller.aircraft_list);

module.exports = router;