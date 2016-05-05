'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, JSDungeon) {
  	$scope.dungeon = JSDungeon.getDungeonTemplate();
  	$scope.deleteRoom = function(room){
  		delete $scope.dungeon.rooms[room];
  	}
  });
