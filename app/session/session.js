'use strict';

angular.module('jsdungeon')
  .config(function ($stateProvider) {
    $stateProvider
      .state('session', {
        url: '/session',
        templateUrl: 'app/session/session.html',
        controller: 'SessionCtrl'
      });
  });