'use strict';

angular.module('jsdungeon')
  .controller('TreeCtrl', function ($scope, $http, $location, JSDungeon) {

          $scope.$watch( 'abc.currentNode', function( newObj, oldObj ) {
          if( $scope.abc && angular.isObject($scope.abc.currentNode) ) {
              console.log( 'Node Selected!!' );
              console.log( $scope.abc.currentNode );
          }
      }, false);
    
    function getRooms(){
      var rooms = [];
      if($scope.dungeon && $scope.dungeon.rooms){
        var i = 0;
        for(var room in $scope.dungeon.rooms){
            rooms.push({
              "label":room,
              "type":"room",
              "id":i,
              "collapsed":true,
              "children":
              [
                {"label":"exits","id":"exits", "collapsed":true,"children":getExits(room)},
                {"label":"objects","id":"objects", "collapsed":true,"children":getObjects(room)}
              ]
            });
            i++;
        }
      }
      return(rooms)
    }
    
    function getItems(){
      var items = [];
      if($scope.dungeon && $scope.dungeon.items){
        var i = 0;
        for(var item in $scope.dungeon.items){
          items.push({
            "label":item,
            "type":"item",
            "id":i,
            "collapsed":true,
            "children":[]
          })
        }
      }
      return(items)
    }
    
    function getObjects(room){
      var objects = [];
      if($scope.dungeon.rooms[room].objects){
        var i = 0;
        for(var object in $scope.dungeon.rooms[room].objects){
          objects.push({
            "label":object,
            "type":"object",
            "id":i,
            "collapsed":true,
            "children":[]
          });
          i++;
        }
      }
      return(objects)
    }
    function getExits(room){
      var exits = [];
      if($scope.dungeon.rooms[room].exits){
        var i = 0;
        for(var exit in $scope.dungeon.rooms[room].exits){
          exits.push({
            "label":exit,
            "type":"exit",
            "id":i,
            "collapsed":true,
            "children":[]
          });
          i++;
        }
      }
      return(exits)
    }

    //test tree model 1
    $scope.tree = 
    [
      {"label":"Rooms","id":"rooms", "collapsed":true, "children":getRooms()},
      {"label":"Items","id":"items", "collapsed":true,"children":getItems()},
      {"label":"Player","id":"player", "collapsed":true,"children":[]}
    ];
  });
