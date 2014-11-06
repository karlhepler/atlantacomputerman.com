define(['marionette', '_vent', 'radiosToSlider'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'section',

		template: '#layout-signup',		

		regions: {
			computers: '#computers',
			estimate:  '#estimate'
		},

		onShow: function() {
			console.log('Signup Layout View');

			$('#num-computers').radiosToSlider();
		}

	});
});