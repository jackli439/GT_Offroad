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
			
		}).when('/whatisgtor',{
			templateUrl: 'views/whatisgtor.html',
			controller: 'Whatisgtor as whatisgtor'
		})
		.otherwise({
			redirectTo: '/'
		})
}])