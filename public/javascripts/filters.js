'use strict';

/* Filters */

angular.module('warehouseApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('olderThanToday', [function() {
      return function(date, days) {
        if (date == null){
            return false;
        }
        var dateToCompare = new Date(date);
        var comparisonDate = Date.today().add(days).days();
        var result = comparisonDate.compareTo(dateToCompare);
        return result == 1;
      }
  }]);