const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    userID: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    location: {type: String, required: true},
    profile_pic: {type: String, required: false},
    twitter_handle: {type: String, required: false},
    lbs_recycled: {type: Number, required: false},
    upVotes: {type: Number, required: true},
});

//Export Model
module.exports = mongoose.model('User', userSchema)