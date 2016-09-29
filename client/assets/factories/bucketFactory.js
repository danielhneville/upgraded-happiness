app.factory('bucketFactory', function($http){
	var bucketList = [];

	function BucketFactory(){};

	BucketFactory.prototype.index = function(update, cb) {
		if (update || bucketList.length == 0){
			$http.get('/buckets')
				.then(function(result){
					cb(result.data);
				})
		} else {
			cb(bucketList);
		}
	};
	BucketFactory.prototype.create = function(info, cb) {
		$http.post('/buckets', info)
			.then(function(result){
				cb(result.data);
			})
	};
	BucketFactory.prototype.update = function(itemID, complete, cb) {
		$http.put('/buckets/' + itemID, {complete: complete})
			.then(function(result){
				cb(result.data);
			})
	};

	return new BucketFactory();
})
