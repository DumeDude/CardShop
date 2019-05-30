
(function(){
    var magicCaller = function($http){
        var searchCardUrl = "https://api.magicthegathering.io/v1/cards?h=h";

        var searchCards = function(){
            var searchInputs = $("#search-container input");
            var dataSearchParam = "search";

            var url = searchCardUrl;
            for(var i = 0; i < searchInputs.length; i++){
                var searchInput = $(searchInputs[i]);
                if(!searchInput){
                    continue;
                }

                var searchParam = searchInput.data(dataSearchParam);
                if(!searchParam){
                    continue;
                }

                var searchValue = searchInput.val();
                if(!searchValue){
                    continue;
                }

                url += "&" + searchParam + "=" + searchValue;
            }

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




