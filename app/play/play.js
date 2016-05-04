'use strict';

angular.module('jsdungeon')
  .config(function ($stateProvider) {
    $stateProvider
      .state('play', {
        url: '/play',
        templateUrl: 'app/play/play.html',
        controller: 'PlayCtrl'
      });
  });