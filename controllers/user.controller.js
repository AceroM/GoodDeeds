const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Testing User Controller');
};

exports.create = function (req, res) {
    var user = new User(
        {
            userID: req.body.userID,
            name: req.body.name,
            password: req.body.password,
            location: req.body.location,
            lbs_recycled: 0,
            upVotes: 0
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User created successfully')
    })
};

exports.readUsers = function (req, res, next) {
	User.find().then((users) => {
		res.send(users)
	})
};

exports.updateUser = function (req, res) {
	User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, point){
		if(err) return next(err);
		res.send('User Updated!')
	});
};

exports.deleteUser = function (req, res) {
	User.findByIdAndRemove(req.params.id, function (err){
		if(err) return next(err);
		res.send('User Deleted!');
	})
};