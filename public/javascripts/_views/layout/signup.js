define(['marionette', '_vent'],
function(Marionette, vent, ComputersView) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'section',

		template: '#layout-signup',		

		regions: {
			computers: '#computers',
			estimate:  '#estimate'
		},

		onShow: function() {
			console.log('Signup Layout View');
		}

	});
});