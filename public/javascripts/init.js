define(['bootstrap',
        'WebFont',
        'slabText'
        ],
function() { 'use strict';
  return function() {

    // Load web fonts! ---------------------
    WebFont.load({
      google: {
        families: ['Swanky and Moo Moo', 'Bangers',
                  'Oswald:700', 'Voltaire',
                  'Open Sans:400,600']
      },
      active: function() {
       $('.bigtext').slabText({ viewpointBreakpoint: '768', fontRatio: '0.7' });
      }
    });

    // Setup affix -------------------------
    $('#computerman-div').affix({
      offset: {
        top: 91
      }
    });
    $('nav.navbar.navbar-default').affix({
      offset: {
        top: 220
      }
    });

  };
});