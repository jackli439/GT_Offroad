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
			
		})
		.otherwise({
			redirectTo: '/'
		})
}])