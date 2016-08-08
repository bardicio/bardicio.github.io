'use strict';

angular.module('jsdungeon')
  .controller('CreateCtrl', function ($scope, $http, $location, $state, $injector, JSDungeon) {
  	$scope.dungeon = JSON.parse(JSON.stringify(JSDungeon.getDungeonTemplate()));
    
    $scope.schema = JSDungeon.schemas("default");//$scope.currentForm soon

    //$scope.form = [JSDungeon.forms("default")];

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
    };

    $scope.pick = function(selection){
      var path = selection.path;
      var thingType = path[path.length-2];
      var thing = path[path.length-1];
      console.log("Test");
      if(thingType === 'rooms'){
        $state.go('create.editroom')
      } else if(thingType === 'exits'){
        $state.go('create.editexit')
      }
    }

    $scope.createRoom = function(){
      var Modal = $injector.get('Modal');
      console.log("Modal" + Modal);
      var stuff = Modal.confirm.generic("Test", "<h1>Test</h1>", function() {
        console.log("Eeyyyy");
      });
      stuff("");
    }

  });
