var mongoose = require('mongoose');

var bucketSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title required.'],
		minlength: [5, 'Title must be at least 5 characters long']
	},
	description: {
		type: String,
		required: [true, 'Description is required'],
		minlength: [10, 'Description must be at least 10 characters long']
	},
	complete: {
		type: Boolean
	}
	_creator: {
		type: String,
		ref: 'User',
		required: true
	},
	_tagged: {
		type: String,
		ref: 'User',
	}
}, {timestamps: true})

mongoose.model('Bucket', bucketSchema);
