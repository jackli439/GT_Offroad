angular.module('thisApp', 
		[
		 	'ngAnimate',
		 	'ngRoute',
		 	'thisAppCtrls',
            'thisAppFact',
            'ui.calendar'
		])
.config(['$routeProvider' , '$locationProvider', function($routeProvider, $locationProvider){
	//$locationProvider.html5Mode(true);

	$routeProvider
		.when('/',{
			templateUrl: 'views/mainpage.html',
			controller: 'MainpageCtrl as mainpage'
		}).when('/interested',{
			templateUrl: 'views/interested.html',
			controller: 'Interested as inter'
		}).when('/calendar',{
			templateUrl: 'views/calendar.html',
			controller: 'Calendar as cal'
		}).when('/history',{
			templateUrl: 'views/history.html',
			controller: 'History as hist'
		}).when('/photosandvideos',{
			templateUrl: 'views/photosandvideos.html',
			controller: 'Photosandvideos as ph'
		}).when('/rankings',{
			templateUrl: 'views/rankings.html',
			controller: 'Rankings as rank'
		})
		.otherwise({
			redirectTo: '/'
		})
}])