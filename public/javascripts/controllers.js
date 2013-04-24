'use strict';

/* Controllers */

angular.module('warehouseApp.controllers', [])
  .controller("AppCtrl", ["$scope", function($scope) {
    //do nothing
  }])
  .controller("ProductsCtrl", ["$scope", function($scope,$filter) {
      $scope.products = [{id: 1, name: "Beef's steaks", addDate: "2012-11-10", details: "6 steaks",expirationTerm: "2012-12-20", almostExpired: false, expired: true},
                         {id: 2, name: "Green beans", addDate: "2012-03-15", details: "500 g", expirationTerm: "2012-06-06", almostExpired: true, expired: false},
                         {id: 3, name: "Pork scallops", addDate: "2013-03-20", details: "10 scallops", expirationTerm: "2013-09-20", almostExpired: false, expired: false}];
  }]);