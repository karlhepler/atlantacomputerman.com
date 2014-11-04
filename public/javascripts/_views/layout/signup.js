define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Marionette.LayoutView.extend({

		tagName: 'section',

		template: '#layout-signup',		

		regions: {
			computers: '#computers',
			estimate:  '#estimate'
		},

		onShow: function() {

		}

	});
});