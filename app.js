'use strict';

angular.module('poke-gallery', [
  'ngRoute',
  'poke.gallery'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true)

    $routeProvider.otherwise({ redirectTo: '/' });
  }]);
