/**
 * Service for jsdungeon stuff
 */
'use strict';

angular.module('jsdungeon')
  .factory('JSDungeon', function () {
    var dungeon = {};
    var dungeonTemplate = {};

    var dungeonStore = localStorage.getItem("dungeon");
    if(dungeonStore){
        dungeon = JSON.parse(dungeonStore);
    }

    var dungeonTemplateStore = localStorage.getItem("dungeonTemplate");
    if(dungeonTemplateStore){
        dungeonTemplate = JSON.parse(dungeonTemplateStore);
    }

    var getDungeon = function(){
        return dungeon;
    }

    var setDungeon = function(newdungeon){
        dungeon = newdungeon;
        localStorage.setItem("dungeon", JSON.stringify(dungeon));
    }

    var setDungeonTemplate = function(newdungeon){
        dungeonTemplate = newdungeon;
        localStorage.setItem("dungeonTemplate", JSON.stringify(dungeonTemplate));
    }

    var getDungeonTemplate = function(){
        return dungeonTemplate;
    }
    
    var interact = function(somestring){
        return jsdungeon.interact(somestring);
    }
    
    // Public API here
    return {
        getDungeon : getDungeon,
        setDungeon : setDungeon,
        setDungeonTemplate : setDungeonTemplate,
        getDungeonTemplate : getDungeonTemplate,
        interact : interact
    };
  });
