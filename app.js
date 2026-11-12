
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

// MongoDB connection
const connectionString = process.env.MONGO_CON;

mongoose.connect(connectionString);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Existing routes
var indexRouter = require('./routes/index');
var aircraftRouter = require('./routes/aircraft');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');

// Assignment 11 resource API
var resourceRouter = require('./routes/resource');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Existing application routes
app.use('/', indexRouter);
app.use('/aircraft', aircraftRouter);
app.use('/grid', gridRouter);
app.use('/randomitem', pickRouter);

// Assignment 11 API
app.use('/resource', resourceRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
var Aircraft = require("./models/aircraft");

async function recreateDB(){  
    // Delete everything existing
    await Aircraft.deleteMany();  
    
    let instance1 = new Aircraft({aircraft_type: "Boeing 737", capacity: 180, cruising_speed: 842});
    instance1.save().then(doc => {
        console.log("First object saved");
    }).catch(err => {
        console.error(err);
    });

    let instance2 = new Aircraft({aircraft_type: "Airbus A320", capacity: 150, cruising_speed: 828});
    instance2.save().then(doc => {
        console.log("Second object saved");
    }).catch(err => {
        console.error(err);
    });

    let instance3 = new Aircraft({aircraft_type: "Cessna 172", capacity: 4, cruising_speed: 226});
    instance3.save().then(doc => {
        console.log("Third object saved");
    }).catch(err => {
        console.error(err);
    });
}

let reseed = true;
if (reseed) {
    recreateDB();
}