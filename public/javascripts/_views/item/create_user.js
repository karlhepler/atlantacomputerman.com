define(['marionette', '_vent', '_models/user'],
function(Marionette, vent, User) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'form',

		attributes: {
			'novalidate': 'novalidate'
		},

		ui: {
			saveBtn: 'button.save-btn',
			cancelBtn: 'button.cancel-btn'
		},

		events: {
			'click @ui.cancelBtn': 'cancelUser',
			'submit': 'saveUser'
		},

		template: '#item-create-user',

		onShow: function() {
			console.log('Create User ItemView!');
		},

		saveUser: function(e) {
			e.preventDefault();

			// Create the model if it doesn't exist
			if ( typeof this.model === 'undefined' )
				this.model = new User();

			// Serialize the form
			var values = this.$el.serializeArray();

			// Set the model attributes
			this.model.set({
				fname: values[0].value,
				lname: values[1].value,
				phone: values[2].value,
				email: values[3].value
			});

			// Trigger save user event and return the model
			this.trigger('save:user', this.model);
		},

		cancelUser: function(e) {
			e.preventDefault();
			this.trigger('cancel:user', this.model);
		}

	});
});