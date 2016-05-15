angular.module('directive.sidebar',[])
  .directive('sidebar', function(){
    return {
      restrict: 'E',
      //scope: {},
      //replace: true,
      //templateUrl:"",
      controller: function($scope){
        alert("hello");
      }
    };
    
  });