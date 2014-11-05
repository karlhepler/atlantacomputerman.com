define(['marionette', '_vent', '_collections/computers', '_views/item/computer'],
function(Marionette, vent, Computers, ComputerView) { 'use strict';
	return Backbone.Marionette.CollectionView.extend({

		tagName: 'ul',

		className: 'computer-list',

		childView: ComputerView,

		onShow: function() {
			console.log('Computer Collection View');
		}

	});
});