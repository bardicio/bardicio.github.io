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

    $scope.stuff = "test";

    //test tree model 1
    $scope.roleList1 = [
        { "roleName" : "User", "roleId" : "role1", "children" : [
          { "roleName" : "subUser1", "roleId" : "role11", "children" : [] },
          { "roleName" : "subUser2", "roleId" : "role12", "children" : [
            { "roleName" : "subUser2-1", "roleId" : "role121", "children" : [
              { "roleName" : "subUser2-1-1", "roleId" : "role1211", "children" : [] },
              { "roleName" : "subUser2-1-2", "roleId" : "role1212", "children" : [] }
            ]}
          ]}
        ]},

        { "roleName" : "Admin", "roleId" : "role2", "children" : [] },

        { "roleName" : "Guest", "roleId" : "role3", "children" : [] }
      ];
  });
