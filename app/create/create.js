'use strict';

angular.module('jsdungeon')
  .config(function ($stateProvider) {
    $stateProvider
        .state('create', {
            url: '/create',
            views: {
              '@' : {
                templateUrl: 'app/create/create.html',
                controller: 'CreateCtrl'
              }
            },
          }).state('create.editroom', {
            url: '/edit/room/:id',
            templateUrl: 'app/create/views/editroom.html'
          }).state('create.editexit', {
            url: '/edit/room/:id',
            templateUrl: 'app/create/views/editexit.html'
          })

  });