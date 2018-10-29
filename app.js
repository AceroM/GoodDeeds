const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var app = express();

const Point = require('./routes/point.route');
const User = require('./routes/user.route');

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/map', function(req, res) {
	res.send('Map:');
});

app.get('/leaderboard', function(req, res) {
	res.send('Leaderboard:');
});

// Set up mongoose connection
const mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var mongoDB = process.env.MONGO_DB;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/points', Point);
app.use('/user', User);

app.listen(3000, function() {
	console.log('Good Deeds up and running on port 3000!');
});
