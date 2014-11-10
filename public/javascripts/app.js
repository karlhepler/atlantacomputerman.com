define(['marionette', 
				'_vent',
				'init',				

				'_views/layout/signup',
				'_models/computer',
				'_collections/computers'
				],
function(Marionette,
				 vent,
				 init,
				 
				 SignupLayoutView,
				 Computer,
				 Computers
				 ) { 'use strict';

	// Declare the new Marionette application
	var app = new Marionette.Application();

	// Set up regions
	app.addRegions({
		content: '#content'
	});

	app.addInitializer(function() {
		init();
	});

	// -------------------------------------------------
	// SIGN UP!!!!!
	vent.on('nav:sign-up', function() {
		// Create Computers collection - this is done here just in case something is provided via the url
		var computers = new Computers();

		// Add one computer to start with
		computers.add( new Computer() );

		// Create the signupLayoutView
		var signupLayoutView = new SignupLayoutView({ computers: computers });

		// Show the signupLayoutView
		app.content.show( signupLayoutView );
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});