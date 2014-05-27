var albumsApp = angular.module('albumsApp', [])
 
albumsApp.factory('albumsFactory', function($http) {
  return {
    getalbumsAsync: function(callback) {
      $http.get('albums.json').success(callback);
    }
  };
});
 
albumsApp.controller('albumController', function($scope, albumsFactory) {
  albumsFactory.getalbumsAsync(function(results) {
    console.log('albumController async returned value');
    $scope.albums = results.albums;
  });
});