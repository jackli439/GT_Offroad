angular.module('thisAppCtrls', [])
.controller('rootCtrl', ['$rootScope', function($rootScope){
	this.foo = "foo root";
	
}])

.controller('MainpageCtrl', ['$location', function(location){
    this.boxNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	this.boxDesc = ["", "Calendar", "What is GTOR?", "How Do I Join?", "Interested?", "Photos and Video", "History", "Rankings", "Contact"]
    this.boxHover = [false, false, false, false, false, false, false, false, false, false];
	this.slideShow = false;
	this.slideNum = 3;
	this.changeSlide = function(num){
		if (num == 0){
			this.slideNum = this.slideNum - 1;
			if (this.slideNum < 1){
				this.slideNum = 1;
			}
		} else {
			this.slideNum = this.slideNum + 1;
			if (this.slideNum > 9){
				this.slideNum = 9;
			}
		}
		return this.slideNum;
	}
}])

