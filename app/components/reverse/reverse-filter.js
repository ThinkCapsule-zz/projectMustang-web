'use strict';

/* Filters */

angular.module('kapacinoApp')
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });