var Aircraft = require('../models/aircraft');

// List of all Aircrafts
exports.aircraft_list = async function(req, res) {    
    try {
        theAircrafts = await Aircraft.find();
        res.send(theAircrafts);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Aircraft.
exports.aircraft_detail = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft detail: ' + req.params.id);
};

// Handle Aircraft create on POST.
exports.aircraft_create_post = async function(req, res) {    
    console.log(req.body);
    let document = new Aircraft();
    
    document.aircraft_type = req.body.aircraft_type;
    document.capacity = req.body.capacity;
    document.cruising_speed = req.body.cruising_speed;
    
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Aircraft delete from on DELETE.
exports.aircraft_delete = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft delete DELETE ' + req.params.id);
};

// Handle Aircraft update form on PUT.
exports.aircraft_update_put = function(req, res) {    
    res.send('NOT IMPLEMENTED: Aircraft update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.aircraft_view_all_Page = async function(req, res) {    
    try {
        theAircrafts = await Aircraft.find();
        res.render('aircraft', { title: 'Aircraft Search Results', results: theAircrafts });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};