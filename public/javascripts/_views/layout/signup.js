define(['marionette', '_vent', 'iCheck'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.LayoutView.extend({

		tagName: 'section',

		template: '#layout-signup',		

		regions: {
			computers: '#computers',
			estimate:  '#estimate'
		},

		onShow: function() {
			console.log('Signup Layout View');

			$('input[name="num-computers"]').iCheck({
				checkboxClass: 'icheckbox_flat-blue',
		    radioClass: 'iradio_flat-blue'
			});			
		}

	});
});