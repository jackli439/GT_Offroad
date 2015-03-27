angular.module('thisApp', 
		[
		 	'ngAnimate',
		 	'ngRoute',
		 	'thisAppCtrls'
		])
.config(['$routeProvider' , '$locationProvider', function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/',{
			templateUrl: 'views/mainpage.html',
			controller: 'MainpageCtrl as mainpage'
			
		}).when('/interested',{
			templateUrl: 'views/interested.html',
			controller: 'Interested as inter'
		})
		.otherwise({
			redirectTo: '/'
		})
}])