define(['marionette', '_vent', '_views/layout/computer_user_select_row', '_views/item/create_user',  'labelauty', 'knob'],
function(Marionette, vent, ComputerUserSelectRowLayoutView, CreateUserItemView) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({		

		template: '#layout-computer',

		className: 'computer',

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

			// Name the region and the class based on the userRows length
			// var regionName = 'userRow' + (this.numUsers++);

			// // Append a row to the userList
			// this.ui.userList.append('<tr class="' + regionName + '"></tr>');

			// // Create the region and save its reference to a variable
			// var thisRegion = this.addRegion(regionName, 'tr.'+regionName);			

			// Create the views
			// var selectUserView = new ComputerUserSelectRowLayoutView({ users: this.options.users });			
			// var createUserView = new CreateUserItemView();

			// selectUserView.thisRegion = thisRegion;
			// selectUserView.createUserView = createUserView;
			// createUserView.thisRegion = thisRegion;
			// createUserView.createUserView = createUserView;
			
			// thisRegion.show( new ComputerUserSelectRowLayoutView({ users: this.options.users }) );

			// thisRegion.currentView.on('create:user', function() {
			// 	thisRegion.show( new CreateUserItemView() );
			// });
			// thisRegion.currentView.on('cancel:user', function() {
			// 	console.log('cancel')
			// });
			
			// Show the userSelectRow in the region
			// thisRegion.show( new ComputerUserSelectRowLayoutView({ users: this.options.users, thisRegion: thisRegion }) );

			// var self = this;

			// this[regionName].currentView.on('create:user', function() {
			// 	this.options.thisRegion.show( new CreateUserItemView({ thisRegion: this.options.thisRegion }) );
			// });
			// this[regionName].currentView.on('cancel:user', function() {
			// 	this.options.thisRegion.show( new ComputerUserSelectRowLayoutView({ users: self.options.users, thisRegion: this.options.thisRegion }) );
			// });

			// EVENTS ---------------------------------------------------------
			// selectUserView.on('create:user', function() {
			// 	// Show the create user form
			// 	this.thisRegion.show( this.createUserView );
			// });
			// selectUserView.on('edit:user', function(user) {
			// 	createUserView.model = user;
			// 	// Show the edit user form
			// 	this.thisRegion.show( this.createUserView );
			// });
			// selectUserView.on('remove:user', function() {
			// 	// Remove the region!
			// 	this.removeRegion( this.thisRegion.el.className );
			// 	// Remove the tr
			// 	self.ui.userList.find('tr.'+thisRegion.el.className).remove();
			// });
			// selectUserView.on('select:user', function(user) {
			// 	console.log('USER SELECTED!', user);
			// });
			// createUserView.on('save:user', function(user) {
			// 	console.log('SAVE USER!!!', user);
			// });
			// createUserView.on('cancel:user', function(user) {
			// 	this.selectUserView = new ComputerUserSelectRowLayoutView({ users: self.options.users });
			// 	this.thisRegion.show( this.selectUserView );
			// 	// console.log('CANCEL BTN PRESSED!', user);
			// });

		}

	});
});