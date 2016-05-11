'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));

    $scope.schema = {
      "type": "object",
      "properties": {
        "people": {
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
          "people[].nick",
          "people[].name",
          "people[].choice"
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
          "nick" : "test"
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
