define(['marionette', '_vent', '_views/composite/computer_user'],
function(Marionette, vent, ComputerUserCompositeView) { 'use strict';
	return Backbone.Marionette.CollectionView.extend({

		tagName: 'tr',

		childView: ComputerUserCompositeView,

		childViewOptions: function(model,index) {
			return {
				model: model,
				allusers: this.options.allusers
			};
		},

		onShow: function() {
			console.log('Computer Users CollectionView', this.collection);
		}

	});
});