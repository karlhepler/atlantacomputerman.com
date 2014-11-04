define(['marionette', 
				'_vent',
				'init'
				],
function(Marionette,
				 vent,
				 init
				 ) { 'use strict';

	// Declare the new Marionette application
	var app = new Marionette.Application();

	// Set up regions
	app.addRegions({
		content: '#content>section'
	});

	app.addInitializer(function() {
		init();
	});

	// -------------------------------------------------
	// SIGN UP!!!!!
	vent.on('nav:sign-up', function() {
		console.log('SIGN UP!');
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});