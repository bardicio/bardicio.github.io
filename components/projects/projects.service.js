/**
 * Factory for getting my projects
 */

'use strict';

angular.module('jsdungeon')
  .factory('Projects', function () {
    var project = function(name, link, img, target){
        this.name = name;
        this.img = img;
        this.link = link;
        this.target = target;
    };
    var projects = [
        new project(
            "Financial Advisor App", 
            "https://github.com/jaaimino/financial-advisor-app", 
            "assets/img/project_thumbs/finadvise_thumb.png", "_blank"
        ),
        new project(
            "Tastimals", 
            "https://github.com/jaaimino/tastimals", 
            "assets/img/project_thumbs/tastimals_thumb.png", "_blank"
        ),
        new project(
            "Dogebook", 
            "https://github.com/jaaimino/dogebook", 
            "assets/img/project_thumbs/dogebook_thumb.png", 
            "_blank"
        ),
        new project(
            "Gemini Simulator", 
            "https://github.com/jaaimino/gemini-simulator", 
            "assets/img/project_thumbs/gemini_thumb.png", 
            "_blank"
        ),
        new project(
            "Jaimino.com", 
            "https://github.com/jaaimino/jaaimino.github.io", 
            "assets/img/project_thumbs/jaimino_thumb.png", 
            "_blank"
        ),
        new project(
            "Reddit Downloader", 
            "https://github.com/jaaimino/reddit-downloader", 
            "assets/img/project_thumbs/redditd_thumb.png", 
            "_blank"
        ),
        new project(
            "JSDungeon", 
            "https://github.com/jaaimino/jsdungeon", 
            "assets/img/project_thumbs/jsdungeon_thumb.png", 
            "_blank"
        ),
        new project(
            "Raddit", 
            "https://github.com/jaaimino/raddit", 
            "assets/img/project_thumbs/raddit_thumb.png", 
            "_blank"
        )
    ];
    var getProjects = function(){
        return projects;
    }
    // Public API here
    return {
        getProjects : getProjects
    };
  });
