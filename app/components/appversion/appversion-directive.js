'use strict';

/* Directives */


angular.module('kapacinoApp')

  .directive('appVersion', ['version', function(version) {
    return function(scope, elm) {
      elm.text(version);
    };
  }]);
