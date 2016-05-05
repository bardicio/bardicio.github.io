/**
 * Service for jsdungeon stuff
 */
'use strict';

angular.module('jsdungeon')
  .factory('JSDungeon', function () {
    var dungeon = {};
    var store = localStorage.getItem("dungeon");
    if(store){
        dungeon = JSON.parse(store);
    };
    var getDungeon = function(){
        return dungeon;
    }
    var setDungeon = function(newdungeon){
        dungeon = newdungeon;
        localStorage.setItem("dungeon", JSON.stringify(dungeon));
    }
    
    var interact = function(somestring){
        return jsdungeon.interact(somestring);
    }
    
    // Public API here
    return {
        getDungeon : getDungeon,
        setDungeon : setDungeon,
        interact : interact
    };
  });
