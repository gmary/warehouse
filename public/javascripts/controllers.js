'use strict';

/* Controllers */

angular.module('warehouseApp.controllers', [])
  .controller("AppCtrl", ["$scope", function($scope) {
    $scope.db = {
      1: {
        name: "black",
        hex: "000000"
      },
      2: {
        name: "white",
        hex: "FFFFFF"
      }
    };
  }]);