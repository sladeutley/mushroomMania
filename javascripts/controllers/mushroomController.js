'use strict';

angular.module("funWithMushrooms").controller("MushroomController", function($scope, MushroomFactory) {

    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        console.log('mushroomData',mushroomData);
        $scope.mushroomList = mushroomData.data.mushrooms;
    });
})