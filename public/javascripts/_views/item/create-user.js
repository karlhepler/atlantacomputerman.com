define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'tr',		

		template: '#item-create-user',

		onRender: function() {
			console.log('Create User ItemView!');
		}

	});
});