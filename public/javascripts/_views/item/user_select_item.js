define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'option',

		template: '#item-user-select-item',

		onShow: function() {
			console.log('User Select ItemView');
		}

	});
});