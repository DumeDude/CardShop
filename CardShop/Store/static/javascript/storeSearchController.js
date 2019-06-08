
(function(){
    var app = angular.module("card-store");

	var storeSearchController = function ($scope, magicCaller, $location, $routeParams, storePageState){
	    $scope.magicSets = magicSets;

	    //UI functions
        if(!$scope.cards){
            $scope.cards = [];
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

            if(!e){
                //bad hack to show user friendly message in UI
            $scope.rarityDropdownText = "All";
            }
	    }

        //action functions
	    $scope.viewCard = function(){
            storePageState.setViewCard(this.card);
	        $location.path('view');
	    }

	    $scope.searchCards = function(){
	        magicCaller.searchCards().then(function(response){
	            storePageState.setSearchResults(response.data.cards);
	            $scope.cards = storePageState.getSearchResults();
	        });
	    }

	    $scope.cards = storePageState.getSearchResults();

	    //set defaults
	    $scope.setDropdownDisplay = "select a set";
	    $scope.rarityDropdownText = "select a rarity";
	    $scope.setCode = null;

	    //if search cards are already populated, try and get the search params to populate
	    if(true || !$scope.cards){

            var name = $routeParams.name;
            if(name){
                $scope.name = name;
            }

            var cmc = $routeParams.cmc;
            if(cmc){
                $scope.cmc = cmc;
            }

            var type = $routeParams.type;
            if(type){
                $scope.type = type;
            }

            var subtypes = $routeParams.subtypes;
            if(subtypes){
                $scope.subtypes = subtypes;
            }

            var text = $routeParams.text;
            if(text){
                $scope.text = text;
            }

	        var setCode = $routeParams.setCode;
	        if(setCode){
	            //find display name
	            for(var i = 0; i < $scope.magicSets.length; i++){
                    if($scope.magicSets[i].code.toLowerCase() == setCode.toLowerCase()){
                        $scope.setCode = setCode;
                        $scope.setDropdownDisplay = $scope.magicSets[i].name;
                        break;
                    }
	            }
	        }

            var rarity = $routeParams.rarity;
            if(rarity){
                $scope.rarity = rarity;
                $scope.rarityDropdownText = rarity;
            }

            var colors = $routeParams.colors;
            if(colors){
                var checkedColors = colors.split('|');

                for(var i = 0; i < checkedColors.length; i++){
                    var currentColor = checkedColors[i];
                    if(!currentColor){
                        continue;
                    }

                    var selector = "#color-select #" + currentColor;
                    $(selector).prop("checked", true);
                }
            }
	    }
	};

	app.controller("storeSearchController", storeSearchController);
}());
