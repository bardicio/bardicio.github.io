'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, JSDungeon) {
  	$scope.dungeon = JSDungeon.getDungeonTemplate();
  	$scope.disabled = true; //Set all ng-disabled to true by default
  	$scope.saveTemplate = function(){
  		JSDungeon.setDungeonTemplate($scope.dungeon);
  	}
  	$scope.deleteRoom = function(key){
  		delete $scope.dungeon.rooms[key];
  		JSDungeon.setDungeonTemplate($scope.dungeon);
  	}
  });
