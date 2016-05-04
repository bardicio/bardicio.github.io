'use strict';

angular.module('jsdungeon')
.controller('PlayCtrl', function ($scope, $http, JSDungeon) {
	$scope.dungeon = JSDungeon.getDungeon();
	$scope.file = {
		name:"None"
	};

	var fr = new FileReader();
	$scope.setFiles = function(fileinput){
		$scope.$apply(function(scope) {
		    $scope.file = fileinput.files[0];
		});
	}
	$scope.handleFileSelect = function(){
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported in this browser.');
			return;
		} else {
			fr.onload = receivedText;
			fr.readAsText($scope.file);
			//fr.readAsDataURL(file);
		}
	}
	var receivedText = function() {
		$scope.$apply(function(scope) {
			$scope.dungeon = JSON.parse(fr.result);
		    JSDungeon.setDungeon($scope.dungeon);
		});
	}
});
