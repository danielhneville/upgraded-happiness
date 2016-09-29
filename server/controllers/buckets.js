var mongoose = require('mongoose'),
	Bucket = mongoose.model('Bucket');

function BucketController(){};

BucketController.prototype.getList = function(req, res) {
	Bucket.find({_creator: req.params.id}).populate('_creator _tagged').exec(function(err, result){
		if (err){
			console.log(err);
			res.json(err);
		} else {
			console.log(result);
			res.json(result);
		}
	})
};
BucketController.prototype.create = function(req, res) {
	var newItem = new Bucket({
		title: req.body.title;
		description: req.body.description;
		complete: false;
		_creator: req.body._creator;
		_tagged: req.body._tagged;
	})
};

module.exports = new BucketController();
