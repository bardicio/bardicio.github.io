'use strict';

angular.module('jsdungeon', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angulartics',
  'angulartics.google.analytics',
  'luegg.directives',
  'schemaForm',
  'directive.sidebar'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    //$locationProvider.html5Mode(true);
  });
