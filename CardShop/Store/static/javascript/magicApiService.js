
(function(){
    var magicCaller = function($http){
        var searchCardUrl = "https://api.magicthegathering.io/v1/cards?h=h";

        var searchCards = function(){
            var dataSearchParam = "search";

            //get text entered inputs
            var textSearchInputs = $("#search-container input[data-search-role='text-input']");
            var url = searchCardUrl;
            for(var i = 0; i < textSearchInputs.length; i++){
                var textInputE = $(textSearchInputs[i]);
                if(!textInputE){
                    continue;
                }

                var searchParam = textInputE.data(dataSearchParam);
                if(!searchParam){
                    continue;
                }

                var searchValue = textInputE.val();
                if(!searchValue){
                    continue;
                }

                url += "&" + searchParam + "=" + searchValue;
            }

            //get check box inputs
            var checkboxSearchInputs = $("#search-container input[name='color']")

            url = url + "&colors=blue,green|blue|green"; //blue and green cards, blue cards, and green cards
            console.log(url);
            return $http.get(url);
        };

        return {
            searchCards: searchCards
        };
    }

	var module = angular.module("card-store");
	module.factory("magicCaller", magicCaller);
}());




