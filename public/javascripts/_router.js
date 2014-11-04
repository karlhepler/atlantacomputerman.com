define(['marionette'], function(Marionette) { 'use strict';
  return Marionette.AppRouter.extend({
    appRoutes: {
    	// The default landing point
      'sign-up': 'navSignup'
    }
  });
});