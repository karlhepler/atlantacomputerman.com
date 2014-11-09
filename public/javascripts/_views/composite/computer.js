define(['marionette', '_vent', '_views/layout/computer_user_row', '_models/user', 'labelauty', 'knob'],
function(Marionette, vent, ComputerUserRowLayoutView, User) { 'use strict';
	return Backbone.Marionette.CompositeView.extend({		

		template: '#composite-computer',

		className: 'computer',

		childView: ComputerUserRowLayoutView,

		childViewContainer: 'table.user-list',

		childViewOptions: function(model,index) {
			return {
				users: this.options.users,
				collection: this.collection
			};
		},

		childEvents: {
			'remove:user': function(childView) {
				// Remove the model from the collection
				this.collection.remove( childView.model );
			}
		},

		ui: {
			dataSaverGB: '.data-saver-gb',
			checkboxes: ':checkbox',
			bigText: '.bigtext',
			userList: 'table.user-list>tbody',

			invincibilityCheckbox: ':checkbox.invincibility',
			webProtectCheckbox: ':checkbox.webProtect',
			minusGbBtn: 'button.minus',
			plusGbBtn: 'button.plus',
			addUserBtn: 'button.add-user',
			removeBtn: 'button.close.remove-computer',
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
			'change @ui.computerNameInput': 'updateComputerName'
		},

		triggers: {
			'click @ui.removeBtn': 'remove'
		},

		modelEvents: {
			'change:gb': function(model, value) {
				// First update all with a trigger to the collection view
				this.trigger('updateGB');
				// Now do the deed
				this.ui.dataSaverGB.val( value ).trigger('change');
			},
			'change:computerName': function(model, value) {
				if ( value == '' ) {
					this.ui.computerNameLabel.text( 'This Computer' );
				}
				else {
					this.ui.computerNameLabel.text( value );
				}
			},
			'change:invincibility': function(model, isInvincible) {
				if ( isInvincible )
					this.ui.computerImg.attr('src', '/images/invincible_computer.png');
				else
					this.ui.computerImg.attr('src', '/images/computer.png');
			}
		},

		initialize: function() {
			// Create a place to store the userRows
			this.numUsers = 0;
		},

		onShow: function() {
			console.log('Computer Layout View');

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

		addUserRow: function(e) {
			e.preventDefault();

			this.collection.add( new User() );
		}

	});
});