angular.module('directive.sidebar',[])
  .directive('sidebar', function(){
    return {
      restrict: 'E',
      scope: 
      {
        dungeon:"="
      },
      replace: true,
      templateUrl:"app/create/directives/sidebar.html",
      controller: function($scope){
        //alert("hello");
        //console.log($scope.dungeon);
      }
    };
    
  });