angular.module('directive.sidebar',[])
  .directive('sidebar', function(){
    return {
      restrict: 'E',
      scope: 
      {
        dungeon:"="
      },
      //replace: true,
      //templateUrl:"",
      controller: function($scope){
        //alert("hello");
        //console.log($scope.dungeon);
      }
    };
    
  });