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
  	}
    $scope.download = function() {
        var name = $scope.dungeon.name.toLowerCase();
        name = name.replace(" ", "_");
        var filename = name + ".dungeon";
        var text = JSON.stringify($scope.dungeon);
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        pom.setAttribute('download', filename);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    }

    /* 
     * Adding new rooms, objects, etc. below
     */
    $scope.newRoom = {};
    $scope.addRoom = function(){
      var roomid = $scope.newRoom.newroomid;
      if(roomid == "" || !roomid){
        return;
      }
      $scope.dungeon.rooms[roomid] = {};
      $scope.dungeon.rooms[roomid].objects = {};
      $scope.dungeon.rooms[roomid].exits = {};
      $scope.newRoom.newroomid = "";
    }
    
    $scope.addObject = function(key){
      var objID = $scope.newRoom.newobjectid;
      if(objID == "" || !objID){
        return;
      }
      $scope.dungeon.rooms[key].objects[objID] = {};
      $scope.dungeon.rooms[key].objects[objID].states = 
      {
        "default":{}
      };
      $scope.newRoom.newobjectid = "";
    }
     
    $scope.addExit = function(key){
      var exitID = $scope.newRoom.newexitid;
      if(exitID =="" || !exitID){
        return;
      }
      $scope.dungeon.rooms[key].exits[exitID] = {};
      $scope.dungeon.rooms[key].exits[exitID].states = 
      {
        "default":{}
      };
      $scope.newRoom.newexitid = "";
      
    }
  });
