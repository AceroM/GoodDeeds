const Point = require('../models/point.model');

exports.test = function (req, res) {
	res.send('Testing Point Controller');
};

exports.pointCreate = function (req, res, next) {
	let point = new Point({
		lat: req.body.lat,
		lng: req.body.lng,
		name: req.body.name,
		quantity: req.body.quantity,
		img: req.body.img,
		title: req.body.title,
		body: req.body.body,
		category: req.body.category,
		upVotes: req.body.upVotes,
		time: req.body.time,
		UID: req.body.UID,
	});
	
	point.save(function (err) {
		if(err){
			return next(err);
		}
		res.send('Point Created Successfully!')
	})
};

exports.readPoint = function (req, res, next) {
	Point.find().then((points) => {
		res.send(points)
	})
};

exports.updatePoint = function (req, res) {
	Point.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, point){
		if(err) return next(err);
		res.send('Point Updated!')
	});
};

exports.deletePoint = function (req, res) {
	Point.findByIdAndRemove(req.params.id, function (err){
		if(err) return next(err);
		res.send('Point Deleted!');
	})
};