'use strict';

angular.module('jsdungeon')
  .config(function ($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/create',
            views: {
              '@' : {
                templateUrl: 'app/create/create.html',
                controller: 'CreateCtrl'
              },
              'sidebar@index' : { 
                templateUrl: 'app/create/views/sidebar.html'
              },
              'main@index' : { 
                templateUrl: 'app/create/views/main.html'
              }
            },
          })

  });