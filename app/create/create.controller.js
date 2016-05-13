'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
    
    
    
    $scope.schema = JSDungeon.forms("default");//$scope.currentForm soon

    $scope.form = [
      {
        type: "tabs",
        tabs: [
          {
            title: "Tab 1",
            items: [
              "name",
              {
                "key" : "eyy",
                "type" : "textarea",
                "placeholder": "So much space!"
              }
            ]
          },
          {
            title: "Tab 2",
            items: [
              "nope"
            ]
          }
        ]
      }
    ];

    $scope.model = {
      people : [
        {
          "nick" : "test"
        },
        {
          "nick" : "eyy"
        }
      ]
    };

    $scope.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        console.log($scope.model);
      }
    }
    
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
                {"label":"exits","id":"exits", "collapsed":true,"children":[]},
                {"label":"objects","id":"objects", "collapsed":true,"children":[]}
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
    



    //test tree model 1
    $scope.roleList1 = 
    [
      {"label":"Rooms","id":"rooms", "collapsed":true, "children":getRooms()},
      {"label":"Items","id":"items", "collapsed":true,"children":getItems()},
      {"label":"Player","id":"player", "collapsed":true,"children":[]}
    ];
  });
