define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({
		
		idAttribute: '_id',

		urlRoot: '/api/computers',

		defaults: {
			gb: 0,
			invincibility: false,
			webProtect: false,
			computerName: 'This Computer'
		}

	});
});