// DEFINE ALL INCLUDES ----------------------------------------------
require.config({
  paths: {
    'jquery':               '/vendor/jquery/dist/jquery.min',   
    
    'backbone':             '/vendor/backbone/backbone',
    'marionette':           '/vendor/marionette/lib/backbone.marionette.min',

    'underscore':           '/vendor/underscore/underscore',
    'bootstrap':            '/vendor/bootstrap/dist/js/bootstrap.min',

    'WebFont':              '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont',
    'slabText':             '/vendor/slabText/js/jquery.slabtext.min',
    'flowType':             '/vendor/FlowType.JS/flowtype.js'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'slabText': {
      deps: ['jquery']
    }
  }
});
//-------------------------------------------------------------------------------------


// Require what it needs, then start the app!
require(['app', 'backbone', '_router', '_controller', '_vent', 'WebFont'], function(app, Backbone, Router, Controller, vent) {
  'use strict';

  // Start the app
  app.start();

  // Instantiate the router
  var router = new Router({
    controller: Controller
  });

  // Start recording history
  Backbone.history.start({
    pushState: true
  });


  // UPDATE THE URL WHEN A NAVIGATION EVENT IS TRIGGERED
  vent.on('nav:sign-up', function() {
    router.navigate('sign-up');
  });
});