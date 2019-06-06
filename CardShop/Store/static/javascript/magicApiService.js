
(function(){
    var magicCaller = function($http){
        var searchCardUrl = "https://api.magicthegathering.io/v1/cards?h=h";

        var searchCards = function(){
            var dataSearchParam = "search";

            //get text entered inputs
            var textSearchInputs = $("#search-container input[data-search-role='text-input']");
            var url = searchCardUrl;
            for(let i = 0; i < textSearchInputs.length; i++){
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
            var colors = "";
            var colorSearchInputs = $("#search-container input[name='color']")
            for(var i = 0; i < colorSearchInputs.length; i++){
                var colorCheckbox = colorSearchInputs[i];
                if(colorCheckbox == null){
                    continue;
                }

                if($(colorCheckbox).is(":checked")){
                    if(colors.length == 0){
                        colors += colors + $(colorCheckbox).val();
                    }
                    else{
                        colors += "|" + $(colorCheckbox).val();
                    }
                }
            }

            if(colors.length > 1){
                url += "&colors=" + colors;
            }

            console.log(url);
            return $http.get(encodeURI(url));
        };

        return {
            searchCards: searchCards
        };
    }

	var module = angular.module("card-store");
	module.factory("magicCaller", magicCaller);
}());

