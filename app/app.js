'use strict';

// Declare app level module which depends on views, and components
angular.module('ClothingStore', [
  'ngRoute',
  'ClothingStore.view1',
  'ClothingStore.view2',
  'ClothingStore.clothes'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/clothes'});
}]);
