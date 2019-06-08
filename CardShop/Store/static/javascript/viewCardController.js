
(function(){
    var app = angular.module("card-store");

	var viewCardController = function ($scope, $location, magicCaller, storePageState){
        $scope.card = storePageState.getViewCard();
        if(!$scope.card || $scope.card.name == undefined){
            $location.path('search');
        }

	    $scope.returnToSearch = function(){
	        storePageState.setViewCard(null);
	        $location.path("search");
	    }
	};

	app.controller("viewCardController", viewCardController);
}());
