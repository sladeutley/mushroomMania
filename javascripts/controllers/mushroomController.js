'use strict';

angular.module("funWithMushrooms").controller("MushroomController", function($scope, MushroomFactory) {
    
    MushroomFactory.getMushrooms()
    .then( (mushroomData) => {
        console.log('mushroomData',mushroomData);
        // $scope.mushroomList = mushroomData.data.mushrooms;
        $scope.mushroomList = Object.values(mushroomData.data); //takes all the properties(objects) in your objects and makes it an array of objects
    });
})