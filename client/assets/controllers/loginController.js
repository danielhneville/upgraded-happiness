app.controller('loginController', function($scope, $location, userFactory){

	$scope.errors = [];

	this.login = function(){
		userFactory.login($scope.name, function(data){
			if (data.errors){
				for (key in data.errors){
					$scope.errors.append(data.errors[key].message);
				}
			} else {
				$location.url('/dashboard');
			}
		})
	}

})
