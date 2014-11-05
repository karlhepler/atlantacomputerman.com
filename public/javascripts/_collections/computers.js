define(['backbone', '_models/computer'], function(Backbone, Computer) {

	return Backbone.Collection.extend({

		model: Computer,

		url: '/api/computers'

	});
});