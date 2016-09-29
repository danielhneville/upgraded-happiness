app.controller('dashboardController', function($scope, $location, userFactory, bucketFactory){

	userFactory.getUser(function(user){
		if(!user){
			$location.url('/index');
		} else {
			$scope.user = user;
		}
	})

	userFactory.index(function(userList){
		if (userList.errors){
			$scope.errors = [];
			for (key in data.errors){
				$scope.errors.push(data.errors[key].message);
			}
		} else {
			$scope.userList = userList;
		}
	})

	$scope.form = {
		_creator: $scope.user._id
	}
	
	bucketFactory.index(false, function(bucketList){
		$scope.bucketList = bucketList;
	})

	this.create(){
		$scope.errors = [];
		bucketFactory.create($scope.form, function(data){
			if (data.errors){
				for (key in data.errors){
					$scope.errors.push(data.errors[key].message);
				}
			} else {
				bucketFactory.index(true, function(bucketList){
					$scope.bucketList = bucketList;
				})
			}
		})
	}

	this.update(itemID, complete){
		$scope.errors = [];
		bucketFactory.update(itemID, complete, function(data){
			if (data.errors){
				for (key in data.errors){
					$scope.errors.push(data.errors[key].message);
				}
			} else {
				bucketFactory.index(true, function(bucketList){
					$scope.bucketList = bucketList;
				})
			}
		})
	}

	this.filter = function(item){
		return ((item._creator._id == $scope.user._id) || (item._tagged._id == $scope.user._id))
	}

	$scope.home = function(){
		$location.url('/dashboard');
	}
	$scope.logout = function(){
		userFactory.logout(function(){
			$location.url('/index');
		})
	}

})