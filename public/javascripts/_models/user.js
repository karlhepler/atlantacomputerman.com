define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({
		
		idAttribute: '_id',

		urlRoot: '/api/users',

		defaults: {
			fname: '',
			lname: '',
			phone: '',
			email: '',
			address1: '',
			address2: '',
			city: '',
			state: '',
			zip: ''
		}

	});
});