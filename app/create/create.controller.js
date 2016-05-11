'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));

    $scope.schema = {
      "type": "object",
      "properties": {
        "rooms": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { 
                "type": "string" 
              },
              "nick": { 
                "type": "string" 
              },
              "choice": {
                type: "string",
                enum: ["one","two"]
              }
            }
          }
        }
      }
    };

    $scope.form = [
      {
        type: "tabarray",
        tabType: "top",
        title: "{{value.nick || ('Tab '+$index)}}",
        key: "people",
        remove: "Delete",
        style: {
          remove: "btn-danger"
        },
        add: "Add person",
        items: [
          "rooms[].nick",
          "rooms[].name",
          "rooms[].choice"
        ]
      },
      {
        type: "submit",
        title: "Save"
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
  });
