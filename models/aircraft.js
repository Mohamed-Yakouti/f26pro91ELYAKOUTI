const mongoose = require("mongoose");

const aircraftSchema = mongoose.Schema({
    aircraft_type: String,
    capacity: Number,
    cruising_speed: Number
});

module.exports = mongoose.model("Aircraft", aircraftSchema);