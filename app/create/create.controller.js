'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
    
    $scope.schema = JSDungeon.schemas("default");//$scope.currentForm soon

    $scope.form = [JSDungeon.forms("default")];

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
