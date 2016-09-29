var app = angular.module('bucketApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			redirectTo: '/index'
		})
		.when('/index', {
			templateUrl: '/partials/login.html',
			controller: 'loginController',
			controllerAs: 'lC'
		})
		.when('/dashboard', {
			templateUrl: '/partials/dashboard.html',
			controller: 'dashboardController',
			controllerAs: 'dC'
		})
		.when('/user/:id', {
			templateUrl: '/partials/user.html',
			controller: 'userController',
			controllerAs: 'uC'
		})
		.otherwise({
			redirectTo: '/index'
		})
})
