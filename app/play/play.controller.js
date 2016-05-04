'use strict';

angular.module('jsdungeon')
.controller('PlayCtrl', function ($scope, $http, JSDungeon) {
	$scope.dungeon = JSDungeon.getDungeon();
	$scope.file = {
		name:"None"
	};
	var fr = new FileReader();
	$scope.setFiles = function(fileinput){
	    var file = fileinput.files[0];
		if(file){
			fr.onload = function(){
				onComplete(JSON.parse(fr.result));
			};
			fr.readAsText(file);
			//fr.readAsDataURL(file);
		};
	}

	$scope.importFile = function(){
		$http.get($scope.fileUrl).then(
		function(data){
			console.log("Get success");
			onComplete(data.data);
		},
		function(data){
			console.log("errrrr");
		})
	}

	var onComplete = function(data) {
		$scope.$evalAsync(function(scope) {
			$scope.dungeon = data;
		    JSDungeon.setDungeon($scope.dungeon);
		    console.log(data);
		});
		
	}
});
