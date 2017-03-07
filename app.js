'use strict';

angular.module('poke-gallery', [
  'ngRoute',
  'poke.gallery'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
