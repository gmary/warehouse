'use strict';

angular.module("warehouseApp", ['ui.bootstrap','warehouseApp.filters', 'warehouseApp.services', 'warehouseApp.directives', 'warehouseApp.controllers'])
  .constant("apiUrl", "http://localhost:9000\:9000/api")
	.config(["$routeProvider", function($routeProvider) {
      // WARNING!
      // Never use a route starting with "/views/" or "/api/" or "/assets/"
      // For templateUrl, always start with "/views/"
      $routeProvider.when("/", {
        templateUrl: "/views/index",
        controller: "AppCtrl"
      });
      $routeProvider.when("/page1", {
        templateUrl: "/views/page1"
      });
      $routeProvider.when("/page2", {
        templateUrl: "/views/page2"
      });
      $routeProvider.when("/colors/:id", {
        templateUrl: "/views/color",
        controller: "ColorCtrl"
      });
      $routeProvider.when("/users", {
        templateUrl: "/views/users",
        controller: "UserCtrl"
      });
      $routeProvider.when("/users/:id", {
        templateUrl: "/views/user",
        controller: "UserCtrl"
      });
      $routeProvider.when("/routing/public1", {
        templateUrl: "/views/public/public1"
      });
      $routeProvider.when("/routing/public2", {
        templateUrl: "/views/public/public2"
      });
      $routeProvider.when("/routing/authenticated", {
        templateUrl: "/views/authenticated/authenticated"
      });
      $routeProvider.when("/routing/admin1", {
        templateUrl: "/views/admin/admin1"
      });
      $routeProvider.when("/routing/admin2", {
        templateUrl: "/views/admin/admin2"
      });
      $routeProvider.otherwise({
        redirectTo: "/"
      });
    }
  ]).config([
    "$locationProvider", function($locationProvider) {
      return $locationProvider.html5Mode(true).hashPrefix("!");
    }
  ]);