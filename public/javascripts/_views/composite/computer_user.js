define(['marionette', '_vent', '_views/composite/user_select'],
function(Marionette, vent, UserSelectCompositeView) { 'use strict';
	return Backbone.Marionette.CompositeView.extend({

		// tagName: 'tr',

		childView: UserSelectCompositeView,

		childViewOptions: function(model, index) {
			return {
				model: model,
				collection: this.options.allusers
			};
		},

		childViewContainer: 'td.user-select-container',

		getTemplate: function() {
			if ( true )
				return '#composite-computer-user_select';
			else
				return '#composite-computer-user_create';
		},

		onShow: function() {
			console.log('Computer User CompositeView', this);
		}

	});
});