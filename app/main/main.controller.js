'use strict';

angular.module('jsdungeon')
  .controller('MainCtrl', function ($scope, $http, $location, JSDungeon) {
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
		}
	}

	$scope.importFile = function(){
		if($scope.fileUrl){
			$http.get($scope.fileUrl).then(
			function(data){
				console.log("Get success");
				onComplete(data.data);
			},
			function(data){
				console.log("errrrr");
			})
		}
	}

	var onComplete = function(data) {
		$scope.$evalAsync(function(scope) {
			$scope.dungeon = data;
		    JSDungeon.setDungeonTemplate(JSON.parse(JSON.stringify($scope.dungeon)));
		    JSDungeon.setDungeon($scope.dungeon);
		});
	}

	$scope.newDungeon = function(){
		JSDungeon.setDungeonTemplate(JSON.parse(JSON.stringify({})));
		JSDungeon.setDungeon({});
		$location.path("/create");
	}

	$scope.startGame = function(){
		$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
		JSDungeon.setDungeon($scope.dungeon);
		$location.path("/play");
	}
  });
