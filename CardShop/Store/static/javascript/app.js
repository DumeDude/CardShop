
(function(){
    var app = angular.module("card-store", ["ngRoute"]);

    //configure routes
    app.config(function($routeProvider){
        $routeProvider
        .when("/search", {
            templateUrl: "/static/templates/storeSearch.html",
            controller: "storeSearchController"
        })
        .when("/view", {
            templateUrl: "/static/templates/viewCard.html",
            controller: "viewCardController"
        })
        .otherwise({ redirectTo: "/search"})
    });
}());

















