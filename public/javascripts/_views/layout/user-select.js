define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tempate: '#layout-user-select',

		regions: {
			main: 'tr'
		}

	});
});