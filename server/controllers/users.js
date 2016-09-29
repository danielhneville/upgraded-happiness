var mongoose = require('mongoose'),
	User = mongoose.model('User');

function UserController(){};

UserController.prototype.index = function(req, res) {
	User.find({}, function(err, data){
		if(err){
			console.log(err);
			res.json(err);
		} else {
			console.log(data);
			res.json(data);
		}
	})
};

UserController.prototype.create = function(req, res) {
	User.findOne({name: req.body.name}, function(err, result){
		if (err) {
			console.log(err);
			res.json(err);
		} else if (!result) {
			var newUser = new User({ name: req.body.name });
			newUser.save(function(err, result){
				if (err){
					console.log(err);
					res.json(err);
				} else {
					res.json(result);
				}
			})
		} else {
			res.json(result);
		}
	})
};

module.exports = new UserController();
