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
              },
              'sidebar@create' : { 
                templateUrl: 'app/create/views/sidebar.html'
              },
              'main@create' : { 
                templateUrl: 'app/create/views/main.html'
              }
            },
          }).state('create.edit', {
            url: '/edit',
            templateUrl: 'app/create/views/topbar.html'
          })

  });