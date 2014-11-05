define(['marionette', 
				'_vent',
				'init',
				'_views/layout/signup',
				'_views/collection/computers',
				'_models/computer',
				'_collections/computers'
				],
function(Marionette,
				 vent,
				 init,
				 SignupLayout,
				 ComputersView,
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
		var compy = new Computer();
		var compies = new Computers(compy);

		// Initialize the signupLayout
		var signupLayout = new SignupLayout();
		var computersView = new ComputersView({ collection: compies });		

		// Show the signupLayout
		app.content.show( signupLayout );

		// Show the computers view in the layout
		signupLayout.computers.show( computersView );

		// Add some computers
		computersView.collection.add( new Computer() );
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});