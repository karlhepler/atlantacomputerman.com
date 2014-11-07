define(['marionette', '_vent', '_views/item/user_dropdown_item', '_views/item/create-user', '_models/user'],
function(Marionette, vent, UserDropdownItemView, CreateUserItemView, User) { 'use strict';
	return Backbone.Marionette.CompositeView.extend({

		template: '#composite-user-select-table',

		tagName: 'tr',

		childView: UserDropdownItemView,

		childViewContainer: 'select.user-select',

		ui: {
			selectUserDropdown: 'select.user-select'
		},

		events: {
			'change @ui.selectUserDropdown': 'newSelectionMade'
		},

		onRender: function() {
			console.log('User Select Table CompositeView!');
			// Collection is users collection
			// Model is chosen user
		},

		newSelectionMade: function(e) {
			if ( $(e.currentTarget).val() == 'create-new-user' ) {
				this.showCreateUserForm();
			}
		},

		showCreateUserForm: function() {
			// Instantiate new user
			var user;
			if ( this.model == null )
				user = new User();
			else
				user = this.model;

			// Create the view and inject the user
			var createUserForm = new CreateUserItemView(user);

			// Now replace this $el with that
			console.log(this);
			// this.$el.html( createUserForm.render() );
		}

	});
});