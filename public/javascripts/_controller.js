define(['_vent'], function (vent) { 'use strict';
  return {
    // The default landing point
    navDefault: function() {
      vent.trigger('nav:default');
    }
  };
});