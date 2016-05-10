'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
  	$scope.disabled = true; //Set all ng-disabled to true by default
  	$scope.saveTemplate = function(){
  		JSDungeon.setDungeonTemplate($scope.dungeon);
  		$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
		  JSDungeon.setDungeon($scope.dungeon);
  	}

  	$scope.deleteThing = function(thing, key){
  		delete thing[key];
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

    $scope.woo = function(e){
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
      console.log("Woo!");
    }

    /* 
     * Adding new rooms, objects, etc. below
     */
    $scope.newRoom = {};
    $scope.addRoom = function(){
      if(!$scope.dungeon.rooms){
        $scope.dungeon.rooms = {};
      }
      var roomid = $scope.newRoom.newroomid;
      if(roomid == "" || !roomid){
        return;
      }
      $scope.dungeon.rooms[roomid] = {};
      $scope.dungeon.rooms[roomid].objects = {};
      $scope.dungeon.rooms[roomid].exits = {};
      $scope.newRoom.newroomid = "";
    }

    $scope.addObject = function(room){
      var objId = $scope.newRoom.newobjectid;
      if(objId == "" || !objId){
        return;
      }
      if(!$scope.dungeon.rooms[room].objects){
        $scope.dungeon.rooms[room].objects = {};
      }
      $scope.dungeon.rooms[room].objects[objId] = {};
      $scope.dungeon.rooms[room].objects[objId].states = 
      {
        "default":{}
      };
      $scope.dungeon.rooms[room].objects[objId].current_state = "default";
      $scope.newRoom.newobjectid = "";
    }
    
    $scope.addItem = function(){
      var itemId = $scope.newRoom.newitemid;
      if(itemId == "" || !itemId){
        return;
      }
      if(!$scope.dungeon.items){
        $scope.dungeon.items = {};
      }
      $scope.dungeon.items[itemId] = {};
      $scope.dungeon.items[itemId].states = 
      {
        "default":{}
      };
      $scope.dungeon.items[itemId].current_state = "default";
      $scope.newRoom.newitemid = "";
    }

    $scope.addState = function(thing){
      var stateId = $scope.newRoom.newstateid;
      if(stateId == "" || !stateId){
        return;
      }
      if(!thing.states){
        thing.states = 
        {
          "default":{}
        };
        thing.current_state = "default";
      }
      thing.states[stateId] = {};
      $scope.newRoom.newstate = "";
    }
     
    $scope.addExit = function(key){
      if(!$scope.dungeon.rooms[key].exits){
        $scope.dungeon.rooms[key].exits = {};
      }
      var exitID = $scope.newRoom.newexitid;
      if(exitID =="" || !exitID){
        return;
      }
      $scope.dungeon.rooms[key].exits[exitID] = {};
      $scope.dungeon.rooms[key].exits[exitID].states = 
      {
        "default":{}
      };
      $scope.dungeon.rooms[key].exits[exitID].current_state = "default";
      $scope.newRoom.newexitid = "";
    }
  });
