const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pointSchema = new Schema({
	lat: {type: Number, required: true},
	lng: {type: Number, required: true},
	name: {type: String, required: true},
	quantity: {type: String, required: false},
	img: {type: String, required: false},
	title: {type: String, required: true},
	body: {type: String, required: true},
	category: {type: String, required: true},
	upVotes: {type: Number, required: true},
	time: {type: String, required: true},
	UID: {type: String, required: true},
});

//Export Model
module.exports = mongoose.model('Point', pointSchema)