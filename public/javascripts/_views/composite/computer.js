define(['marionette', '_vent', '_collections/users', '_models/user', '_views/collection/computer_users', 'labelauty', 'knob'],
function(Marionette, vent, Users, User, ComputerUsersCollectionView) { 'use strict';
	return Backbone.Marionette.CompositeView.extend({		

		template: '#composite-computer',

		className: 'computer',

		childView: ComputerUsersCollectionView,

		childViewOptions: function(model,index) {
			// Put the users collection into the users collection view
			return {
				model: model,
				collection: model.collection,
				allusers: this.options.allusers
			};
		},

		childViewContainer: 'table.computer-user-list>tbody',

		ui: {
			dataSaverGB: '.data-saver-gb',
			checkboxes: ':checkbox',
			bigText: '.bigtext',
			userListTable: 'table.computer-user-list>tbody',

			invincibilityCheckbox: ':checkbox.invincibility',
			webProtectCheckbox: ':checkbox.webProtect',
			minusGbBtn: 'button.minus',
			plusGbBtn: 'button.plus',
			addUserBtn: 'button.add-user',
			removeBtn: 'button.close',
			computerNameInput: 'input.computer-name',
			computerNameLabel: 'span.computer-name',
			computerImg: 'img.computer-img'			
		},

		events: {
			'change @ui.invincibilityCheckbox': 'changeInvincibility',
			'change @ui.webProtectCheckbox': 'changeWebProtect',
			'click @ui.minusGbBtn': 'minusGb',
			'click @ui.plusGbBtn': 'plusGb',
			'click @ui.addUserBtn': 'addUserRow',
			'click @ui.removeBtn': 'removeThisComputer',
			'change @ui.computerNameInput': 'updateComputerName'
		},

		modelEvents: {
			'change:gb': function(model, value) {
				// First update all with a trigger to the collection view
				this.trigger('updateGB');
				// Now do the deed
				this.ui.dataSaverGB.val( value ).trigger('change');
			},
			'change:computerName': function(model, value) {
				if ( value == '' )
					this.ui.computerNameLabel.text( 'This Computer' );
				else
					this.ui.computerNameLabel.text( value );
			},
			'change:invincibility': function(model, isInvincible) {
				if ( isInvincible )
					this.ui.computerImg.attr('src', '/images/invincible_computer.png');
				else
					this.ui.computerImg.attr('src', '/images/computer.png');
			}
		},

		initialize: function() {
			// Create new collection of users associated specifically with this view
			this.collection = new Users();
		},

		onShow: function() {
			console.log('Computer Composite View');

			this.ui.checkboxes.labelauty({
				minimum_width: "100%"
			});

			this.ui.dataSaverGB.knob({
				step: 5,
				width: '100%',
				angleOffset: 270,
				angleArc: 180,
				max: 10,
				readOnly: true
			});

			this.ui.bigText.slabText();

			// Focus on the computer name input box
			// this.ui.computerNameInput.focus();
		},

		updateComputerName: function(e) {
			this.model.set('computerName', $(e.currentTarget).val());
		},

		changeInvincibility: function(e) {
			this.model.set('invincibility', $(e.currentTarget).is(':checked') );
		},

		changeWebProtect: function(e) {
			this.model.set('webProtect', $(e.currentTarget).is(':checked') );
		},

		plusGb: function(e) {
			e.preventDefault();
			this.model.set('gb', this.model.get('gb') + 5 );
		},

		minusGb: function(e) {
			e.preventDefault();
			this.model.set('gb', this.model.get('gb') > 0 ? this.model.get('gb') - 5 : 0);
		},

		removeThisComputer: function(e) {
			e.preventDefault();
			this.trigger('removeThisComputer');
		},

		addUserRow: function(e) {
			e.preventDefault();
			console.log('ADD COMPUTER USER');
			// Add a new user to the collection
			this.collection.add( new User() );
		}

	});
});