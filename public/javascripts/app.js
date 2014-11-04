define(['marionette', 
				'_vent',				

				// Globals -----
				'bootstrap',
				'WebFont',
				'slabText'
				],
function(Marionette,
				 vent
				 ) { 'use strict';

	// Declare the new Marionette application
	var app = new Marionette.Application();

	// Set up regions
	app.addRegions({
		content: '#content'
	});

	app.addInitializer(function() {
		// Load web fonts!
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

	});

	// -------------------------------------------------
	// I want to load a month at a time into the collection

	vent.on('nav:default', function() {
		console.log('HELLO!');
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});