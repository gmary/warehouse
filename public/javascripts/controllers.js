'use strict';

/* Controllers */
angular.module('warehouseApp.controllers', [])
  .controller("AppCtrl", ["$scope", function($scope) {
      //do nothing
  }])
  .controller("ProductsCtrl", ['$scope','Restangular', function($scope,Restangular) {
      var baseProducts = Restangular.all('products');
      $scope.daysBeforeWarn = 10;
      $scope.products = baseProducts.getList();
  }]);