'use strict';

angular.module('poke.gallery', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'gallery/gallery.html',
      controller: 'GalleryCtrl'
    });
  }])

  .controller('GalleryCtrl', ['$scope', '$http', 'filterFilter', function ($scope, $http, filterFilter) {
    var imgbaseurl = "images/";
    var pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=151"

    $http.get(pokeapi + "&callback=JSON_CALLBACK")
      .then(data => data.data.results.map((poke, i) => {
        return { name: poke.name, id: i + 1, img: imgbaseurl + (i + 1) + ".png" };
      })).then(pokemons => { $scope.pokemons = pokemons; $scope.filterList = pokemons });

    $scope.$watch('search.key', function (term) {
      var obj = { name: term }
      $scope.filterList = filterFilter($scope.pokemons, obj);
      $scope.currentPage = 1;
    });

  }])
  .filter('numberformat', () => (i) => (1e2 + "" + i).slice(-3))
  .filter('start', function () {
    return function (input, start) {
      if (!input || !input.length) { return; }

      start = +start;
      return input.slice(start);
    };
  });