'use strict';
 
function photoController($scope) {
  var numberOfPhotos = 4;
  var photoPath = "./images/promos/";  
  var photos = [];
  for (var i=1; i<numberOfPhotos+1; i++){
    photos.push(photoPath + i + ".jpg");
  }
  var photoIndex = Math.floor( Math.random() * numberOfPhotos );
  $scope.photoImg = photos[photoIndex];

  $scope.setPhoto = function() {

    if (photoIndex < numberOfPhotos - 1){
      photoIndex++;
    }else {
      photoIndex = 0;
    }
    $scope.photoImg = photos[photoIndex];
  }
}

angular
  .module('app')
  .controller('photoController', ['$scope', photoController]);
