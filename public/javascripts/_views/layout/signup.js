define(['marionette', '_vent', 'radiosToSlider'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'section',

		template: '#layout-signup',		

		regions: {
			computers: '#computers',
			estimate:  '#estimate'
		},

		ui: {
			numComputers: 'input[name="num-computers"]'
		},

		events: {
			'click @ui.numComputers': 'updateNumComputers'
		},

		onShow: function() {
			console.log('Signup Layout View');

			$('#num-computers').radiosToSlider();
		},

		updateNumComputers: function(e) {
			this.trigger('updateNumComputers', e);
		}

	});
});