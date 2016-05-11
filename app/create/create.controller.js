'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
  	$scope.disabled = true; //Set all ng-disabled to true by default
    $scope.getTriggerTypes = JSDungeon.getTriggerTypes;
    $scope.selecteditem = {
      items:[]
    };

    $scope.getFreeItems = function(){
      var tems = [];
      for (var item in $scope.dungeon.items) {
        if ($scope.dungeon.items.hasOwnProperty(item)) {
          tems.push(item);
        }
      }
      
      
      var inventoryItems = $scope.dungeon.player.inventory;
      for(var i in inventoryItems){
        var item = inventoryItems[i];
        var index = tems.indexOf(item);
        if(index >= 0){
          tems.splice(index,1);
        }
        
      }
      
      
      for (var room in $scope.dungeon.rooms){
        if($scope.dungeon.rooms[room].items){
          var items = $scope.dungeon.rooms[room].items;
          for(var i=0;i<items.length;i++){
            var item = items[i];
            var index = tems.indexOf(item);
            if(index >= 0){
              tems.splice(index, 1);
            }
          }
        }
      }
      return tems;
    }

    var updateFreeItems = function(){
      $scope.$evalAsync(function(scope) {
        $scope.freeitems = $scope.getFreeItems();
      });
    }

    //Populate free items once
    updateFreeItems();
    
    $scope.addItemInventory = function(){
      var item = $scope.selecteditem.items[0];
      if(item){
        if(!$scope.dungeon.player.inventory){
          $scope.dungeon.player.inventory = [];
        }
        $scope.dungeon.player.inventory.push($scope.selecteditem.items[0]);
      }
      $scope.selecteditem.items = [];
      updateFreeItems();
    }
    
    $scope.removeItemInventory = function(){
      var item = $scope.selecteditem.items[0];
      if(item){
        if(!$scope.dungeon.player.inventory){
          $scope.dungeon.player.inventory = [];
        }
        var index = $scope.dungeon.player.inventory.indexOf($scope.selecteditem.items[0]);
        $scope.dungeon.player.inventory.splice(index, 1);
      }
      $scope.selecteditem.items = [];
      updateFreeItems();
    }
    

    $scope.addItemRoom = function(room){
      var item = $scope.selecteditem.items[0];
      if(item){
        if(!room.items){
          room.items = [];
        }
        room.items.push($scope.selecteditem.items[0]);
      }
      $scope.selecteditem.items = [];
      updateFreeItems();
    }

    $scope.removeItemRoom = function(room){
      var item = $scope.selecteditem.items[0];
      if(item){
        if(!room.items){
          room.items = [];
        }
        var index = room.items.indexOf($scope.selecteditem.items[0]);
        room.items.splice(index, 1);
      }
      $scope.selecteditem.items = [];
      updateFreeItems();
    }

    $scope.test = function(){
      $scope.saveTemplate();
      JSDungeon.setDungeon(JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate())));
      $location.path("/session");
    }

  	$scope.saveTemplate = function(){
  		JSDungeon.setDungeonTemplate(JSON.parse(JSON.stringify($scope.dungeon)));
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
     * Delete things
     */
    $scope.deleteThing = function(thing, key){
      delete thing[key];
      updateFreeItems();
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
