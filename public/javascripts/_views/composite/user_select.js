define(['marionette', '_vent', '_views/item/user_select_item'],
function(Marionette, vent, UserSelectItemView) { 'use strict';
	return Backbone.Marionette.CompositeView.extend({

		tagName: 'select',

		className: 'user-select form-control',

		attributes: {
			'name': 'user-select',
			'required': 'required'
		},

		childView: UserSelectItemView,

		template: '#composite-user-select',

		onShow: function() {
			console.log('User Select CompositeView');
		}

	});
});