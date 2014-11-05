define(['marionette', '_vent'],
function(Marionette, vent) { 'use strict';
	return Backbone.Marionette.ItemView.extend({

		tagName: 'li',

		className: 'computer',

		template: '#item-computer',

		onShow: function() {
			console.log('Computer Item View');

			this.$el.find('input:checkbox').each(function() {
				var self = $(this),
			      label = self.next(),
			      label_text = label.text();

			    label.remove();
			    self.iCheck({
			      checkboxClass: 'icheckbox_line-blue',
			      radioClass: 'iradio_line-blue',
			      insert: '<div class="icheck_line-icon"></div>' + label_text
			    });
			});
		}

	});
});