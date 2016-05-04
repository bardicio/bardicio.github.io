'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, JSDungeon) {
  	$scope.dungeon = JSDungeon.getDungeon();
  });
