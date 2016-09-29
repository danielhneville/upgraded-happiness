var mongoose = require('mongoose');

var users = require('./../controllers/users.js');
var buckets = require('./../controllers/buckets.js');

module.exports = function(app){
	app.get('/users', users.index);
	app.post('/users', users.login);
	app.post('/buckets', buckets.create);
	app.get('/buckets/:id', buckets.getList);
	app.put('/buckets/:userid', buckets.update);
}
