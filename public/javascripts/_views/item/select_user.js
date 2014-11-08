define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'select',

		className: 'user-select form-control',

		template: '#item-user-select',

		collectionEvents: {
			'add': 'modelAdded'
		},

		events: {
			'change': 'newSelection'
		},

		onShow: function() {
			console.log('Select User ItemView');
		},

		modelAdded: function(model, collection, event) {
			this.$el.append('<option value="' + model.get('fname') + '|' + model.get('lname') + '">' + model.get('fname') + ' ' + model.get('lname') + '</option>');
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