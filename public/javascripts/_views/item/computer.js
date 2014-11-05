define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'li',

		className: 'computer',

		template: '#item-computer',

		onShow: function() {
			console.log('Computer Item View');
		}

	});
});