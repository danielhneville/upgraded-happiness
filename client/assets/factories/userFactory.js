app.factory('userFactory', function($http){
	var userList = [];
	var user = null;

	function UserFactory(){};

	UserFactory.prototype.login = function(name, cb) {
		$http.post('/users', {name: name})
			.then(function(result){
				user = result.data;
				cb(result.data);
			})
	};
	UserFactory.prototype.logout = function(cb) {
		user = null;
		cb();
	};
	UserFactory.prototype.index = function(cb) {
		if (userList.length != 0){
			cb(userList);
		} else {
			$http.get('/users')
				.then(function(result){
					userList = result.data;
					cb(result.data);
				})
		}
	};
	UserFactory.prototype.getUser = function(cb) {
		cb(user);
	};
	
	return new UserFactory();
})

