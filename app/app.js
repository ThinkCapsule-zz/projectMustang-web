'use strict';

// Declare app level module which depends on filters, and services
angular.module('kapacinoApp', [
    'kapacinoApp.config',
    'kapacinoApp.security',
    'kapacinoApp.home',
    'kapacinoApp.account',
    'kapacinoApp.chat',
    'kapacinoApp.login',
    'kapacinoApp.directives'
  ])
  // Handles routing for the app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/index.html'
    })
    .when('/login', {
      templateUrl: 'views/login.htmls'
    })
    .otherwise({
      redirectTo: 'views/index.html'
    });
  }])
  
  .run(['$rootScope', 'Auth', function($rootScope, Auth) {
    // track status of authentication
    Auth.$onAuth(function(user) {
      $rootScope.loggedIn = !!user;
    });
  }]);
