define(['_vent'], function (vent) { 'use strict';
  return {
    // The default landing point
    navSignup: function() {
      vent.trigger('nav:sign-up');
    }
  };
});