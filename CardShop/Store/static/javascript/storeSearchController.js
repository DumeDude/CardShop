
(function(){
    var app = angular.module("card-store");

	var storeSearchController = function ($scope, magicCaller){
	    $scope.cards = [];
	    $scope.searchCards = function(){
	        magicCaller.searchCards().then(function(response){
	            console.log(JSON.stringify(response.data.cards));
	            $scope.cards = response.data.cards;
	        });
	    }
	};

	app.controller("storeSearchController", storeSearchController);
}());



