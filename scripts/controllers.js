angular.module('thisAppCtrls', [])
.controller('rootCtrl', ['$rootScope', function($rootScope){
	this.foo = "foo root";
	
}])

.controller('MainpageCtrl', ['$location', function(location){
	this.box = [
		{
			num: 1,
			desc: "Calendar",
			hover: false,
			link: ""
		},
				{
			num: 2,
			desc: "What is GTOR?",
			hover: false,
			link: "whatisgtor"
		},
				{
			num: 3,
			desc: "How Do I Join?",
			hover: false,
			link: ""
		},
				{
			num: 4,
			desc: "Interested?",
			hover: false,
			link: ""
		},
				{
			num: 5,
			desc: "Photos and Video",
			hover: false,
			link: ""
		},
				{
			num: 6,
			desc: "History",
			hover: false,
			link: ""
		},
				{
			num: 7,
			desc: "Rankings",
			hover: false,
			link: ""
		},
				{
			num: 8,
			desc: "Contact",
			hover: false,
			link: ""
		},
				{
			num: 9,
			desc: "",
			hover: false,
			link: ""
		},
	
	]
	
	this.images = [
		{
			src: '/images/gallery/img-cycle1.jpg',
			num: 1
		},
		{
			src:'/images/gallery/img-cycle2.jpg',
			num: 2
		},
		{
			src:'/images/gallery/img-cycle3.jpg',
			num: 3
		},
		{
			src:'/images/gallery/img-cycle4.jpg',
			num: 4
		},
		{
			src:'/images/gallery/img-cycle5.jpg',
			num: 5
		},
		{
			src:'/images/gallery/img-cycle6.jpg',
			num: 6
		},
		{
			src:'/images/gallery/img-cycle7.jpg',
			num: 7
		},
		{
			src:'/images/gallery/img-cycle8.jpg',
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

.controller('Whatisgtor', ['$rootScope', function($rootScope){
	this.foo = "AAAAA";
	
}])
