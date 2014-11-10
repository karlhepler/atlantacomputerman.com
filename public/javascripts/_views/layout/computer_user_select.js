define(['marionette', '_vent', '_views/item/select_user', '_views/item/create_user'],
function(Marinette, vent, SelectUserItemView, CreateUserItemView) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'tr',

		template: '#layout-computer-user-select-row',

		regions: {
			userContainer: 'td.user-container'
		},

		ui: {
			editBtn: 'button.edit-btn',
			removeBtn: 'button.remove-btn'
		},

		triggers: {
			'click @ui.removeBtn': 'remove:user'
		},

		events: {
			'click @ui.editBtn': 'editUser'
		},

		initialize: function() {
			// Create the user item select
			this.selectUserItemView = new SelectUserItemView({ collection: this.options.users, user: this.model });
			
			// Select listeners
			this.selectUserItemView
				// Listen for create
				.on('create:user', function() {
					this.trigger('create:user');
				}, this)
				.on('select:user', function(user) {
					// Make this user the layout's selected user
					this.model = user;

					this.trigger('select:user', user);
				}, this);
		},

		onShow: function() {
			console.log('COMPUTER USER ROW!');

			// Show the user item select
			this.userContainer.show( this.selectUserItemView );
		},

		editUser: function(e) {
			e.preventDefault();

			this.trigger('edit:user', this.model);
		}

	});
});