'use strict';

angular.module("funWithMushrooms", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
        .when("/", {
            templateUrl: "javascripts/partials/mushrooms.html",
            controller: "MushroomController"
        })
        .otherwise("/")
});