
(function(){
    var storePageState = function(){
        var viewCard = null;
        var searchResults = null;

        var setViewCard = function(cardInput){
            viewCard = cardInput;
        }

        var getViewCard = function(){
            return viewCard;
        }

        var setSearchResults = function(cardSet){
            searchResults = cardSet;
        }

        var getSearchResults = function(){
            return searchResults;
        }

        return {
            setViewCard: setViewCard,
            getViewCard: getViewCard,
            setSearchResults: setSearchResults,
            getSearchResults: getSearchResults
        };
    };

	var module = angular.module("card-store");
	module.factory("storePageState", storePageState);
}());
