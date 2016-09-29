app.controller('userController', function($scope, $location, $routeParams, userFactory, bucketFactory){

	userFactory.getUser(function(user){
		if(!user){
			$location.url('/index');
		} else {
			$scope.user = user;
		}
	})

	userFactory.index(function(userList){
		for (var i = 0; i < userList.length; i++){
			if (userList[i]._id == $routeParams.id){
				$scope.profile = userList[i];
			}
		}
	})

	bucketFactory.index(false, function(bucketList){
		$scope.bucketList = bucketList;
	})

	this.done = function(item){
		return ( ( ( item._creator._id == $scope.profile._id ) || ( item._tagged._id == $scope.profile._id ) ) && ( item.complete ) )
	}
	this.pending = function(item){
		return ( ( ( item._creator._id == $scope.profile._id ) || ( item._tagged._id == $scope.profile._id ) ) && ( !item.complete ) )
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
