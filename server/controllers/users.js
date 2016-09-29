var mongoose = require('mongoose'),
	User = mongoose.model('User');

function UserController(){};

UserController.prototype.index = function(req, res) {
	User.find({}, function(err, data){
		if(err){
			res.json(err);
		} else {
			res.json(data);
		}
	})
};

UserController.prototype.login = function(req, res) {
	User.findOne({name: req.body.name}, function(err, result){
		if (err) {
			res.json(err);
		} else if (!result) {
			var newUser = new User({ name: req.body.name });
			newUser.save(function(err, result){
				if (err){
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
