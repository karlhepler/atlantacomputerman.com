define(['marionette', '_vent', '_collections/computers', '_views/item/computer'],
function(Marionette, vent, Computers, ComputerView) { 'use strict';
	return Backbone.Marionette.CollectionView.extend({

		id: 'computer-list',

		className: 'col-xs-12',

		childView: ComputerView,

		onShow: function() {
			console.log('Computer Collection View');
		}

	});
});