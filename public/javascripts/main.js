// JQUERY DOCUMENT READY --------------
$(function() {

	// Load fonts ---------------------------
	WebFontConfig = {
	    google: { families: [ 'Oswald:700', 'Voltaire', 'Bangers' ]
	    },
	    active: webFontsLoaded
	  };
	  (function() {
	    var wf = document.createElement('script');
	    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	    wf.type = 'text/javascript';
	    wf.async = 'true';
	    var s = document.getElementsByTagName('script')[0];
	    s.parentNode.insertBefore(wf, s);
	  })();

	// FONTS LOADED! DO STUFF!!!
	function webFontsLoaded() {
		$('.big-text').slabText();
	}

	// SKROLLR - init and disable on mobile
	if( $(window).width() > 767 ) {
		skrollr.init({
			forceHeight: false
		});
	}

	// Trigger modal when clicking quick support contact email link
	$('.quick-support-contact-box .email:parent').click(function(e) {
		e.preventDefault();

		$('#quick-contact-modal').modal('show');
	});

	// Send Quick Contact Form
	$('form.quick-contact').submit(function(e) {
		e.preventDefault();
		
		// Serialize the form data
		var formData = $(this).serialize();

		// Start spinner
		$('.spinner').show();

		var thisForm = $(this)[0];

		// Post the form
		$.post('/quick-contact', formData, function(data) {
			// Hide the spinner
			$('.spinner').hide();
			
			// Close the modal
			$('#quick-contact-modal').modal('hide');

			// Clear the form
			thisForm.reset();
		});
	});

	// Send Contact Form
	$('form.contact').submit(function(e) {
		e.preventDefault();
		
		// Serialize the form data
		var formData = $(this).serialize();

		// Start spinner
		$('.spinner').show();

		var thisForm = $(this)[0];

		// Post the form
		$.post('/contact', formData, function(data) {
			// Hide the spinner
			$('.spinner').hide();

			// Clear the form
			thisForm.reset();
		});
	});

	// Phone number input mask
	$("#phone").mask("(999) 999-9999");
	
});