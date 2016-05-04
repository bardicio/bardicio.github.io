'use strict';

angular.module('jsdungeon')
.controller('PlayCtrl', function ($scope, $http, JSDungeon) {
	$scope.dungeon = JSDungeon.getDungeon();
});
