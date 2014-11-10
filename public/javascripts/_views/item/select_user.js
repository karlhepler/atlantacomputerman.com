define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'select',

		className: 'user-select form-control',

		template: '#item-select-user',

		collectionEvents: {
			'add': 'modelAdded',
			'change:fname': 'modelChanged',
			'change:lname': 'modelChanged'
		},

		events: {
			'change': 'newSelection'
		},

		onShow: function() {
			console.log('Select User ItemView');

			if ( typeof this.options.user !== 'undefined' )
				this.$el.find('option[value="' + this.options.user.get('fname') + '|' + this.options.user.get('lname') + '"]').prop('selected', true);
		},

		modelAdded: function(model, collection, event) {
			this.$el.append('<option value="' + model.get('fname') + '|' + model.get('lname') + '">' + model.get('fname') + ' ' + model.get('lname') + '</option>');
		},

		modelChanged: function(model, collection, event) {
			this.$el.find('option[value="' + model.previousAttributes().fname + '|' + model.previousAttributes().lname + '"]')
							.val( model.get('fname') + '|' + model.get('lname') )
							.text( model.get('fname') + ' ' + model.get('lname') );
		},

		newSelection: function(e) {
			if ( this.$el.val() === 'create-new-user' )
				// Trigger call to show create new user view
				this.trigger('create:user');
			else {
				// Trigger call to edit user and return the user to edit
				var name = this.$el.val().split('|');
				this.trigger( 'select:user', this.collection.findWhere({ fname: name[0], lname: name[1] }) );
			}
		}

	});
});