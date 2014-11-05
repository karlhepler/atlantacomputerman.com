define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'li',

		template: '#item-computer',

		onShow: function() {
			console.log('Computer Item View');
		}

	});
});