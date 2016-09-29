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
BucketController.prototype.update = function(req, res) {
	// Check for identity
	if (req.params.userid != req.body.ownerid){
		res.json({errors: {check: {message: 'You can\'t check of other user\'s items'}}})
		return null;
	}
	// Update checkbox
	Bucket.findOneAndUpdate({_id: req.body.bucketid}, {complete: req.body.complete}, {runValidators: true}, function(err, doc){
		if (err) {
			console.log(err);
			res.json(err);
		} else {
			console.log(doc);
			res.json(doc);
		}
	})
};

module.exports = new BucketController();
