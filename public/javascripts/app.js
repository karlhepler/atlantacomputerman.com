define(['marionette', 
				'_vent',
				'init',
				'_views/layout/signup'
				],
function(Marionette,
				 vent,
				 init,
				 SignupLayout
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
		var signupLayout = new SignupLayout();
		app.content.show( signupLayout );
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});