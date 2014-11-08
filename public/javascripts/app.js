define(['marionette', 
				'_vent',
				'init',				

				'_views/layout/signup',
				'_views/collection/computers',
				'_models/computer',
				'_collections/computers',
				'_collections/users',
				'_models/user',

				'_views/item/select_user',
				'_views/item/create_user',

				'radiosToSlider'
				],
function(Marionette,
				 vent,
				 init,
				 SignupLayoutView,
				 ComputersCollectionView,
				 Computer,
				 Computers,
				 Users,
				 User,

				 SelectUserItemView,
				 CreateUserItemView
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

		// Fill users with users - must happen before show
		// users.add([
		// 	{ fname: 'Karl', lname: 'Hepler', phone: '8044821509', email: 'karl.hepler@gmail.com' },
		// 	{ fname: 'Cristen', lname: 'Hepler', phone: '7701234567', email: 'cristenhepler@gmail.com' },
		// 	{ fname: 'Karen', lname: 'Mabey', phone: '6781234567', email: '3mabeys@gmail.com' }
		// ]);

		// // Create the UserSelect ItemView
		// var userSelectItemView = new SelectUserItemView({ collection: users });				

		// // Show the userSelectItemView in the content region
		// app.content.show( userSelectItemView );

		// users.add({ fname: 'Bob', lname: 'Marley', phone: '9876543143', email: 'bob.marley@gmail.com' });

		// // Events
		// userSelectItemView.on('create:user', function() {
		// 	console.log('CREATE NEW USER');
		// 	var createUserItemView = new CreateUserItemView();
		// 	app.content.show( createUserItemView );
		// });
		// userSelectItemView.on('edit:user', function(model) {
		// 	console.log('EDIT USER', model);
		// 	var createUserItemView = new CreateUserItemView({ model: model });
		// 	app.content.show( createUserItemView );
		// });
		// ----------------------------------------------------
		// var computers = new Computers();
		// var allusers = new Users();
		// allusers.add( new User() );

		// // Initialize the signupLayout
		// var signupLayout = new SignupLayout();
		// var computersView = new ComputersView({ collection: computers, allusers: allusers });		

		// // Show the signupLayout
		// app.content.show( signupLayout );

		// // Show the computers view in the layout
		// signupLayout.computers.show( computersView );

		// // Add some computers
		// computersView.collection.add( new Computer() );

		// // Update the slider
		// $(signupLayout.ui.numComputers[computersView.collection.length-1]).prop('checked',true).change();

		//-------------------------------------------------------------------
		// EVENTS
		// ------------------------------------------------------------------
		
		// When a computer is removed with the X button, update the slider...
		// computersView.on('childview:remove', function(e) {
		// 	// The trick is manually triggering the change event at the end
		// 	$(signupLayout.ui.numComputers[computersView.collection.length-1]).prop('checked',true).change();
		// });

		// Change number of computers based on slider number
		// signupLayoutView.on('updateNumComputers', function(e) {
			
		// });
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});