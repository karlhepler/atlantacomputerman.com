define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
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
			'click @ui.saveBtn': 'saveUser',
			'click @ui.cancelBtn': 'cancelUser'
		},

		template: '#item-create-user',

		onShow: function() {
			console.log('Create User ItemView!');
		},

		saveUser: function(e) {
			e.preventDefault();
			this.trigger('save:user', this.model);
		},

		cancelUser: function(e) {
			e.preventDefault();
			this.trigger('cancel:user', this.model);
		}

	});
});