// JQUERY DOCUMENT READY --------------
$(function() {

	WebFont.load({
    google: {
      families: ['Swanky and Moo Moo', 'Bangers',
      					 'Oswald:700, Voltaire',
      					 'Open Sans:400,600']
    },
    active: function() {
    	$('.bigtext').slabText({ viewpointBreakpoint: '380', fontRatio: '1.5' });
    }
  });

});