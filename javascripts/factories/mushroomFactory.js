'use strict';

angular.module("funWithMushrooms").factory("MushroomFactory", function($q, $http) {
    let getMushrooms = () => {
        return $q( (resolve, reject) => {
            $http
            .get(`https://fir-101-68ad0.firebaseio.com/mushrooms.json`)
            .then ( (mushrooms) => {
                resolve(mushrooms);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    };

    return { getMushrooms };
});