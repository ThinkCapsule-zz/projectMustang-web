'use strict';

// Declare app level module which depends on filters, and services
angular.module('kapacinoApp', [
    'kapacinoApp.config',
    'kapacinoApp.security',
    'kapacinoApp.home',
    'kapacinoApp.account',
    'kapacinoApp.chat',
    'kapacinoApp.login'
  ])
  
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }])
  
  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      $rootScope.loggedIn = !!user;
    });
  }]);
