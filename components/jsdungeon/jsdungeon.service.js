/**
 * Service for jsdungeon stuff
 */
'use strict';

angular.module('jsdungeon')
  .factory('JSDungeon', function () {
    var dungeon = {};
    var dungeonTemplate = {};
    var trigger_types = ["remove_item", "add_item", "flavor_text"];

    var dungeonStore = localStorage.getItem("dungeon");
    if(dungeonStore){
        dungeon = JSON.parse(dungeonStore);
    }

    var getTriggerTypes = function(){
        return trigger_types;
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

    var forms = function(type){
      switch(type){
        case "default":
        var form = {
          type: "tabs",
          tabs: [
            {
              title: "Tab 1",
              items: [
                "name",
                {
                  "key" : "eyy",
                  "type" : "textarea",
                  "placeholder": "So much space!"
                }
              ]
            },
            {
              title: "Tab 2",
              items: [
                "nope"
              ]
            }
          ]
        }
      }
    }
    
    //Switch statement that returns whatever form type is wanted
    var schemas = function(type){
      switch(type){
        case "default":
          var form =  { 
            "type": "object",
                "properties": {
                  "name": { 
                    "type": "string" 
                  },
                  "eyy": { 
                    "type": "string" 
                  },
                  "nope": { 
                    "type": "string" 
                  },
                }
          }
          return form
      }
    }
    
    // Public API here
    return {
        getDungeon : getDungeon,
        setDungeon : setDungeon,
        setDungeonTemplate : setDungeonTemplate,
        getDungeonTemplate : getDungeonTemplate,
        getTriggerTypes : getTriggerTypes,
        interact : interact,
        forms: forms
    };
  });
