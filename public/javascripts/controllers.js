'use strict';

/* Controllers */
angular.module('warehouseApp.controllers', [])
  .controller("AppCtrl", ['$scope', function($scope) {
      //do nothing
  }])
  .controller("ProductsCtrl", ['$scope','Restangular','$dialog', function($scope,Restangular,$dialog) {
      var baseProducts = Restangular.all('products');
      $scope.daysBeforeWarn = 10;
      $scope.products = baseProducts.getList();

      $scope.deleteProduct = function(product) {
         var d = $dialog.dialog({modalFade: false, resolve: {product: function(){ return angular.copy(product);}}});
         d.open("/views/dialogs/removeProductDialog",'RemoveDialogController').then(function(result){
           if(result)
           {
             Restangular.one("products", product.id).remove().then(
             function(){
               $scope.products = baseProducts.getList();
             },
             function errorCallback() {
                alert("Oops error from server :(");
             });
           }
         });
      };
  }])
  .controller("RemoveDialogController", ['$scope','dialog','product', function($scope,dialog,product) {
      $scope.product = product
      $scope.close = function(result){
          dialog.close(result);
      };
  }]);