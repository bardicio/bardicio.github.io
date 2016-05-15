angular.module('directive.sidebar',[])
  .directive('sidebar', function(){
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: 
      {
        dungeon:"=",
      },
      replace: true,
      templateUrl:"app/create/directives/sidebar.html",
      link: function(scope,element, attrs, ctrl){
        
        scope.selected = function(event, name, obj){
          var path = [];
          var el = event.target;
          do{
            if(el.childElementCount ===0){
              path.unshift(el.innerHTML);
            }
            el = el.parentElement.parentElement.firstElementChild;
          }while(scope.pathHead(path[0]))
          
          if(name !== undefined){
            var data = 
            {
              "name":name,
              "data":obj,
              "path":path
            };
            ctrl.$setViewValue(data);
            //console.log(scope.ngModel)
            //scope.ngChange();
          }
          
        };
        
        scope.pathHead = function(name){
          heads = ["rooms","items","player"];
          for(i in heads){
            if(name === heads[i]){
              return false;
            }
          }
          return true;
        }
        
      },
      
      controller: function($scope){
        //alert("hello");
        //console.log($scope.dungeon);

        
        
        
      },

    };
    
  });