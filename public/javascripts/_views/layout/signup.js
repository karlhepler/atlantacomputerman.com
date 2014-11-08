define(['marionette', '_vent', '_collections/users', '_views/collection/computers', '_models/computer', 'radiosToSlider'],
function(Marionette, vent, Users, ComputersCollectionView, Computer) { 'use strict';
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
			'click @ui.numComputers': 'changeNumComputers'
		},

		initialize: function() {
			// Create users collection
			this.users = new Users();

			// TESTING...
			this.users.add([
				{ fname: 'Karl', lname: 'Hepler', phone: '8044821509', email: 'karl.hepler@gmail.com' },
				{ fname: 'Cristen', lname: 'Hepler', phone: '7701234567', email: 'cristenhepler@gmail.com' },
				{ fname: 'Karen', lname: 'Mabey', phone: '6781234567', email: '3mabeys@gmail.com' }
			]);

			// Create the computersCollectionView
			this.computersCollectionView = new ComputersCollectionView({ collection: this.options.computers, users: this.users });

			// Listen for trigger to remove computer
			this.computersCollectionView.on('childview:remove', function() {
				this.setSlider();
			}, this);
		},

		onShow: function() {
			console.log('Signup Layout View', this);

			// jQuery Stuff
			$('#num-computers').radiosToSlider(); // Setup Radio-To-Slider
			this.setSlider();

			// Show the computersCollectionView in the computers region
			this.computers.show( this.computersCollectionView );
		},

		setSlider: function() {
			$(this.ui.numComputers[this.options.computers.length-1]).prop('checked',true).change();
		},

		changeNumComputers: function(e) {
			var newNum = $(e.currentTarget).val();
			var numComputers = this.options.computers.length;
			var numDiff = newNum - numComputers;

			if ( numDiff > 0 ) {
				// Add computers
				for ( var i = numDiff; i > 0; i-- ) {
					this.options.computers.push( new Computer() );
				}
			}
			else if ( numDiff < 0 ) {
				// Remove computers
				for ( var i = numDiff; i < 0; i++ ) {
					this.options.computers.pop();
				}
			}
		}

	});
});