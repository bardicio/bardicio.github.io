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


    //test tree model 1
    $scope.roleList1 = 
    [
      {"label":"Rooms","id":"rooms", "children":[]},
      {"label":"Items","id":"items","children":[]},
      {"label":"Player","id":"player","children":[]}
    ];
  });
