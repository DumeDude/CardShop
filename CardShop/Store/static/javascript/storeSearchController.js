
(function(){
    var app = angular.module("card-store");

	var storeSearchController = function ($scope, magicCaller){
	    $scope.magicSets = magicSets;

	    $scope.cards = [];
	    $scope.searchCards = function(){
	        magicCaller.searchCards().then(function(response){
	            console.log(JSON.stringify(response.data.cards));
	            $scope.cards = response.data.cards;
	        });
	    }

	    $scope.selectSet = function(e){
	        alert("here");
	        alert(JSON.stringify(e));

	    };

	};

	app.controller("storeSearchController", storeSearchController);
}());



