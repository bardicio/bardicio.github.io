'use strict';

angular.module('jsdungeon')
.factory('Modal', function($rootScope, $uibModal) {
  /**
   * Opens a modal
   * @param  {Object} scope      - an object to be merged with modal's scope
   * @param  {String} modalClass - (optional) class(es) to be applied to the modal
   * @return {Object}            - the instance $modal.open() returns
   */
  function openModal(scope, modalClass) {
    var modalScope = $rootScope.$new();
    scope = scope || {};
    modalClass = modalClass || 'modal-default';

    angular.extend(modalScope, scope);

    return $uibModal.open({
      templateUrl: 'components/modal/modal.html',
      windowClass: modalClass,
      scope: modalScope
    });
  }

  // Public API here
  return {
    /* Confirmation modals */
    confirm: {
      askToLogin: function(cb) { //my new modal
        cb = cb || angular.noop;
        return function() {
          var args = Array.prototype.slice.call(arguments),
            name = args.shift(),
            theModal;
          theModal = openModal({ //openModal is a function the modal service defines.  It is just a wrapper for $Modal
            modal: {
              dismissable: true,
              title: 'Login',
              html: '<p>In order to complete the <strong>' + name + '</strong> action you must login.</p>', //set the modal message here, name is the parameter we passed in
              buttons: [{ //this is where you define you buttons and their appearances
                classes: 'btn-warning',
                text: 'Cancel',
                click: function(event) {
                  theModal.dismiss(event);
                }
              }, {
                classes: 'btn-primary',
                text: 'Login',
                click: function(event) {
                  theModal.close(event);
                }
              }, ]
            }
          }, 'modal-primary');
          theModal.result.then(function(event) {
            cb.apply(event, args); //this is where all callback is actually called
          });
        }
      },
      generic: function(title, template, cb) { //my new modal
        title = title || "";
        cb = cb || angular.noop;
        return function() {
          /*
          var args = Array.prototype.slice.call(arguments),
              title = args.shift(),
              template = args.shift(),

          */
          var theModal;
          //console.log(args);
          theModal = openModal({ //openModal is a function the modal service defines.  It is just a wrapper for $Modal
            modal: {
              dismissable: true,
              title: title,
              html: template, //set the modal message here, name is the parameter we passed in
              buttons: [{ //this is where you define you buttons and their appearances
                classes: 'btn-warning',
                text: 'Cancel',
                click: function(event) {
                  theModal.dismiss(event);
                }
              }, {
                classes: 'btn-primary',
                text: 'Confirm',
                click: function(event) {
                  theModal.close(event);
                }
              }, ]
            }
          }, 'modal-primary');
          theModal.result.then(function(event) {
            cb.apply(event); //this is where all callback is actually called
          });
        };
      },
      invalidAccess: function(cb) { //my new modal
        cb = cb || angular.noop;
        return function() {
          var args = Array.prototype.slice.call(arguments),
            name = args.shift(),
            theModal;
          theModal = openModal({ //openModal is a function the modal service defines.  It is just a wrapper for $Modal
            modal: {
              dismissable: true,
              title: 'Login',
              html: '<p>You don\'t have the correct access to do that.</p>', //set the modal message here, name is the parameter we passed in
              buttons: [{ //this is where you define you buttons and their appearances
                classes: 'btn-warning',
                text: 'Cancel',
                click: function(event) {
                  theModal.dismiss(event);
                }
              }, {
                classes: 'btn-primary',
                text: 'Login',
                click: function(event) {
                  theModal.close(event);
                }
              }, ]
            }
          }, 'modal-primary');
          theModal.result.then(function(event) {
            cb.apply(event, args); //this is where all callback is actually called
          });
        };
      }
    }
  }
});