define(['marionette', '_vent', '_views/item/select_user', '_views/item/create_user'],
function(Marinette, vent, SelectUserItemView, CreateUserItemView) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'tr',

		template: '#layout-computer-user-row',

		regions: {
			userContainer: 'td.user-container'
		},

		ui: {
			editBtn: 'button.edit-btn',
			removeBtn: 'button.remove-btn'
		},

		events: {
			'click @ui.removeBtn': 'removeUser',
			'click @ui.editBtn': 'editUser'
		},

		initialize: function() {
			// Create the user item select
			this.selectUserItemView = new SelectUserItemView({ collection: this.options.users });
			
			// Select listeners
			this.selectUserItemView
				// Listen for create
				.on('create:user', function() {
					// Remove the edit/remove button td
					this.$el.find('td.user-container').next().hide();

					// Show the create user view in the user container
					var createUserItemView = new CreateUserItemView();
					this.userContainer.show( createUserItemView );

					// Listen for events
				}, this)
				.on('select:user', function(user) {
					// Make this user the layout's selected user
					this.user = user;
				}, this);
		},

		onRender: function() {
			console.log('COMPUTER USER ROW!');

			// Show the user item select
			this.userContainer.show( this.selectUserItemView );
		},

		removeUser: function(e) {
			e.preventDefault();
		},

		editUser: function(e) {
			e.preventDefault();

			// Remove the edit/remove button td
			this.$el.find('td.user-container').next().hide();

			// Show the create user view in the user container
			var createUserItemView = new CreateUserItemView({ model: this.user });
			this.userContainer.show( createUserItemView );
		}

	});
});