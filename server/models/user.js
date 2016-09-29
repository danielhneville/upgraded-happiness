var mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name required.'],
		unique: true
	}
}, {timestamps: true})

userSchema.plugin(uniqueValidator);

mongoose.model('User', userSchema);
