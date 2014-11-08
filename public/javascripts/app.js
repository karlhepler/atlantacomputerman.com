define(['marionette', 
				'_vent',
				'init',
				'_views/layout/signup',
				'_views/collection/computers',
				'_models/computer',
				'_collections/computers',
				'_collections/users',
				'_models/user',

				'_views/item/user_select',
				'_views/item/create_user'
				],
function(Marionette,
				 vent,
				 init,
				 SignupLayout,
				 ComputersView,
				 Computer,
				 Computers,
				 Users,
				 User,

				 UserSelectItemView,
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
		// Create users collection
		var users = new Users();		

		// Fill users with users - must happen before show
		users.add([
			{ fname: 'Karl', lname: 'Hepler', phone: '8044821509', email: 'karl.hepler@gmail.com' },
			{ fname: 'Cristen', lname: 'Hepler', phone: '7701234567', email: 'cristenhepler@gmail.com' },
			{ fname: 'Karen', lname: 'Mabey', phone: '6781234567', email: '3mabeys@gmail.com' }
		]);

		// Create the UserSelect ItemView
		var userSelectItemView = new UserSelectItemView({ collection: users });				

		// Show the userSelectItemView in the content region
		app.content.show( userSelectItemView );

		users.add({ fname: 'Bob', lname: 'Marley', phone: '9876543143', email: 'bob.marley@gmail.com' });

		// Events
		userSelectItemView.on('create:user', function() {
			console.log('CREATE NEW USER');
			var createUserItemView = new CreateUserItemView();
			app.content.show( createUserItemView );
		});
		userSelectItemView.on('edit:user', function(model) {
			console.log('EDIT USER', model);
			var createUserItemView = new CreateUserItemView({ model: model });
			app.content.show( createUserItemView );
		});

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

		// //-------------------------------------------------------------------
		// // EVENTS
		// // ------------------------------------------------------------------
		
		// // When a computer is removed with the X button, update the slider...
		// computersView.on('childview:removeThisComputer', function(e) {
		// 	// The trick is manually triggering the change event at the end
		// 	$(signupLayout.ui.numComputers[computersView.collection.length-1]).prop('checked',true).change();
		// });

		// // Change number of computers based on slider number
		// signupLayout.on('updateNumComputers', function(e) {
		// 	var newNum = $(e.currentTarget).val();
		// 	var numComputers = computers.length;
		// 	var numDiff = newNum - numComputers;

		// 	if ( numDiff > 0 ) {
		// 		// Add computers
		// 		for ( var i = numDiff; i > 0; i-- ) {
		// 			computers.push( new Computer() );
		// 		}
		// 	}
		// 	else if ( numDiff < 0 ) {
		// 		// Remove computers
		// 		for ( var i = numDiff; i < 0; i++ ) {
		// 			computers.pop();
		// 		}
		// 	}
		// });
	});

	// FINALLY... RETURN THE APP!!!!
	return app;
});