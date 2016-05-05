'use strict';

angular.module('jsdungeon')
.controller('PlayCtrl', function ($scope, $http, JSDungeon) {
	$scope.dungeon = JSDungeon.getDungeon();
	$scope.output = "";
	$scope.input = "";
	$scope.$evalAsync(function(scope) {
		$scope.output += jsdungeon.startGame($scope.dungeon);
	});
	$scope.interact = function(){
		var stuff = JSDungeon.interact($scope.input);
		$scope.$evalAsync(function(scope) {
			$scope.output += stuff;
		});
		$scope.input = "";
	}
});
