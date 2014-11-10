define(['marionette', '_views/layout/computer_user_select', '_views/item/create_user'],
function(Marionette, ComputerUserSelectLayoutView, CreateUserItemView) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'tr',

		template: '#layout-computer-user-row',

		regions: {
			main: 'td'
		},

		onShow: function() {
			console.log('Computer User Row LayoutView');
	
			this.main.show( new ComputerUserSelectLayoutView({ users: this.options.users }) );

			this.listenToEvents(this.main.currentView);
		},

		listenToEvents: function(currentView) {

			// Show create user form
			currentView.on('create:user', function() {
				this.main.show( new CreateUserItemView() );
				this.listenToEvents(this.main.currentView);
			}, this);

			// Show the edit user form
			currentView.on('edit:user', function(user) {
				this.main.show( new CreateUserItemView({ model: user }) );
				this.listenToEvents(this.main.currentView);
			}, this);

			// A user was selected - save it as the model
			currentView.on('select:user', function(user) {
				this.cloneUser(user);
			}, this);

			// A user was saved from the form
			currentView.on('save:user', function(user) {
				// If the user is a new user, then add it to the master collection
				if ( typeof this.options.users.get(user) === 'undefined' )
					this.options.users.add(user);

				// Clone the user to this user
				this.cloneUser(user);

				// Show the user select layout
				this.main.show( new ComputerUserSelectLayoutView({ users: this.options.users, model: user }) );

				// Recurse
				this.listenToEvents(this.main.currentView);
			}, this);

			// The form was cancelled
			currentView.on('cancel:user', function(user) {
				this.main.show( new ComputerUserSelectLayoutView({ users: this.options.users, model: user }) );
				this.listenToEvents(this.main.currentView);
			}, this);

			// This row has been selected to be removed
			currentView.on('remove:user', function() {
				this.trigger('remove:user');
			}, this);	
		},

		cloneUser: function(user) {
			this.model.set({
				fname:    user.get('fname'),
				lname:    user.get('lname'),
				phone:    user.get('phone'),
				email:    user.get('email'),
				address1: user.get('address1'),
				address2: user.get('address2'),
				city:     user.get('city'),
				state:    user.get('state'),
				zip:      user.get('zip')
			});
		}

	});
});