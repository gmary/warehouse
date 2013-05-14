'use strict';

angular.module("warehouseApp", ['restangular','ui.bootstrap','ui.date','warehouseApp.filters', 'warehouseApp.services', 'warehouseApp.directives', 'warehouseApp.controllers'])
    .constant("apiUrl", "http://localhost:9000\:9000/api")
    .config(["$routeProvider", function($routeProvider) {
      // WARNING!
      // Never use a route starting with "/views/" or "/api/" or "/assets/"
      // For templateUrl, always start with "/views/"
      $routeProvider.when("/", {
        templateUrl: "/views/index",
        controller: "AppCtrl"
      });
      $routeProvider.when("/products", {
        templateUrl: "/views/products",
        controller: "ProductsCtrl"
      });
      $routeProvider.otherwise({
        redirectTo: "/"
      });
    }])
    .config([
    "$locationProvider", function($locationProvider) {
      return $locationProvider.html5Mode(true).hashPrefix("!");
    }])
    .config(function(RestangularProvider) {
        RestangularProvider.setBaseUrl('/api');
    });;