angular.module('thisAppCtrls', [])
.controller('rootCtrl', ['$rootScope','$location', function($rootScope, $location){
	this.foo = "foo root";
	this.changeLoc = function(addr){
		$location.url(addr);
	}
	this.loc = $location.url();
}])

.controller('MainpageCtrl', ['$location', 'MainmenuBoxes', function(location, MainmenuBoxes){

    
	this.box = [
        MainmenuBoxes.getCalendar(),
        MainmenuBoxes.getWhatIsGtor(),
        MainmenuBoxes.getHowDoIJoin(),
		MainmenuBoxes.getInterested(),
		MainmenuBoxes.getPhotosAndVideos(),
		MainmenuBoxes.getHistory(),
		MainmenuBoxes.getRankings(),
		MainmenuBoxes.getContact(),
		MainmenuBoxes.getNull()
	
	]
	
	this.images = [
		{
			src: './images/gallery/img-cycle1.jpg',
			num: 1
		},
		{
			src:'./images/gallery/img-cycle2.jpg',
			num: 2
		},
		{
			src:'./images/gallery/img-cycle3.jpg',
			num: 3
		},
		{
			src:'./images/gallery/img-cycle4.jpg',
			num: 4
		},
		{
			src:'./images/gallery/img-cycle5.jpg',
			num: 5
		},
		{
			src:'./images/gallery/img-cycle6.jpg',
			num: 6
		},
		{
			src:'./images/gallery/img-cycle7.jpg',
			num: 7
		},
		{
			src:'./images/gallery/img-cycle8.jpg',
			num: 8
		},
	]
	
	this.currentSlide = 3;
	this.changeSlide = function(num){
		if (num == 0){
			this.currentSlide = this.currentSlide - 1;
			if (this.currentSlide < 1){
				this.currentSlide = 1;
			}
		} else {
			this.currentSlide = this.currentSlide + 1;
			if (this.currentSlide > 8){
				this.currentSlide = 8;
			}
		}
	}
	
	
	
}])

.controller('Interested', ['$rootScope', function($rootScope){
	this.foo = "AAAAA";
}])

.controller('Calendar', ['$rootScope','$window', function($rootScope,$window){
    $window.scroll(0,0);
    this.uiConfig = {
      calendar:{
        height: 650,
        editable: false,
        googleCalendarApiKey: 'AIzaSyBTbSupjRMeFtG775xgtECG37-kacTLOfA',
        events: {
            googleCalendarId: 'gtoffroadcalendar@gmail.com'
        },
        loading: function(bool) {
            $('#loading').toggle(bool);
        },
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        }
            
      }
    };
    this.eventSources = [];
    
//    this.events = null;
//    this.eventSources=[this.events];
    

    
}])

.controller('History', ['$rootScope', 'HistoryYears', '$window', function($rootScope, HistoryYears, $window){
    $window.scroll(0,0);
    this.years = HistoryYears.getYears();
}])

.controller('Photosandvideos', ['$rootScope', function($rootScope){
	this.foo = "AAAAA";
}])

.controller('Rankings', ['$rootScope', function($rootScope){
	this.foo = "AAAAA";
}])