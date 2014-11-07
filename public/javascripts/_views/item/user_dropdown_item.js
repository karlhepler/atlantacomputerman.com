define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'option',

		template: '#item-user-dropdown-item',

		onShow: function() {
			console.log('User DropDown ItemView');
		}

	});
});