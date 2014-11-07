define(['marionette', '_vent', '_collections/computers', '_views/item/computer'],
function(Marionette, vent, Computers, ComputerView) { 'use strict';
	return Backbone.Marionette.CollectionView.extend({

		id: 'computer-list',

		className: 'col-xs-12',

		childView: ComputerView,

		childEvents: {
			'removeThisComputer': function(computerView) {
				// Don't remove it if it's the last one left
				if ( this.collection.length > 1 )
					this.collection.remove( computerView.model );
			},
			'updateGB': function(computerView) {
				// Add up all gb from all models
				var totalGB = this.collection.reduce(function(sum,model){return sum+model.get('gb')}, 0);
				// Calculate the maxGB
				var maxGB = this.getMaxGB(totalGB);
				// Update all dataSaverGBs in the list
				var dataSaverGB = this.$el.find('input.data-saver-gb');
				for (var i = dataSaverGB.length - 1; i >= 0; i--) {
					$(dataSaverGB[i]).trigger('configure', { max: maxGB });
				};
			}
		},

		onShow: function() {
			console.log('Computer Collection View');
		},

		getMaxGB: function(gb) {
			gb += 5; // Make this one step ahead
			var maxGB;
			if ( gb > 500 ) { maxGB = 1000; }
			else if ( gb > 250 ) { maxGB = 500; }
			else if ( gb > 100 ) { maxGB = 250; }
			else if ( gb > 50 ) { maxGB = 100; }
			else if ( gb > 10 ) { maxGB = 50; }
			else if ( gb > 0 ) { maxGB = 10; }
			return maxGB;
		},

	});
});