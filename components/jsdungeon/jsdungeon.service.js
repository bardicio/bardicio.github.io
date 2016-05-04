/**
 * Service for jsdungeon stuff
 */
'use strict';

angular.module('jsdungeon')
  .factory('JSDungeon', function () {
    var dungeon = {};
    var getDungeon = function(){
        return dungeon;
    }
    var setDungeon = function(newdungeon){
        dungeon = newdungeon;
    }
    /*
    var interact = function(somestring){
        return dungeon.interact(somestring);
    }
    */
    // Public API here
    return {
        getDungeon : getDungeon,
        setDungeon : setDungeon
    };
  });
