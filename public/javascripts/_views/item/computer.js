define(['marionette', '_vent', 'labelauty', 'knob'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'li',

		className: 'computer',

		template: '#item-computer',

		onShow: function() {
			console.log('Computer Item View');

			this.$el.find(':checkbox').labelauty({
				minimum_width: "100%"
			});

			this.$el.find('.data-saver-gb').knob({
				step: 5,
				width: '100%',
				angleOffset: 270,
				angleArc: 180
			});
		}

	});
});