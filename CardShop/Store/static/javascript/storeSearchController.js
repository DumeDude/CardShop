
(function(){
    var app = angular.module("card-store");

	var storeSearchController = function ($scope, magicCaller){
	    $scope.magicSets = magicSets;
	    $scope.setDropdownDisplay = "select a set";
	    $scope.rarityDropdownText = "select a rarity";

	    $scope.cards = [];
	    $scope.searchCards = function(){
	        magicCaller.searchCards().then(function(response){
	            $scope.cards = response.data.cards;
	        });
	    }

	    $scope.selectSet = function(e){
	        var set = this.set;
            if(set == null){
                $scope.setDropdownDisplay = "All";
                $("#setCode").val('');
                return;
            }

            $scope.setDropdownDisplay = set.name;
            $("#setCode").val(set.code);
	    };

	    $scope.selectRarity = function(e){
            $scope.rarityDropdownText = e;
            $("#rarity").val(e);
	    }

	};

	app.controller("storeSearchController", storeSearchController);
}());



