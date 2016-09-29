var mongoose = require('mongoose'),
	Bucket = mongoose.model('Bucket');

function BucketController(){};

BucketController.prototype.index = function(req, res) {
	Bucket.find({}).populate('_creator _tagged').exec(function(err, result){
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
	newItem.save(function(err, result){
		if(err){
			res.json(err);
		} else {
			res.json(result);
		}
	})
};
BucketController.prototype.update = function(req, res) {
	Bucket.findOneAndUpdate({_id: req.params.itemid}, {complete: req.body.complete}, {runValidators: true}, function(err, doc){
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
