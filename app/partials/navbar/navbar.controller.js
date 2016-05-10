'use strict';

angular.module('jsdungeon')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '#/'
    },
    {
      'title': 'Play',
      'link': '#/play'
    },
    {
      'title': 'Editor',
      'link': '#/create'
    },
    {
      'title': 'Help',
      'link': '#/help'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === "#" + $location.path();
    };

    function cutUrl(str) {
      var matched = str.match(/([^/]*\/){2}/);
      return matched ? matched[0] : str/* or null if you wish */;
    }

    $scope.isDropdownActive = function(route) {
      return route === "#" + cutUrl($location.path());
    };

  });