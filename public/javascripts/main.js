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
	$('.quick-support-contact-box .email:parent, section.contact span.email:parent').click(function(e) {
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



	// ----------------------------------------- //
	// -------------- SIGN UP ------------------ //
	// ----------------------------------------- //
	
	// Select computer type
	$('section.sign-up select.form-factor').change(function() {
		if ( $(this).val() == 'desktop' ) {
			$(this).prev('img').attr('src','/images/desktop.png');
		}
		else {
			$(this).prev('img').attr('src','/images/laptop.png');
		}
	});

	// Add user button
	$('section.sign-up button.add-user').click(function(e) {
		e.preventDefault();

		// Create li.user
		var li = $('<li />', { class: 'user' }).append( $('.select-user-template').html() );

		// Append li.user to ul.user-list
		$(this).prev('ul.user-list').append( li );
	});

	// Show create user form if "CREATE USER" is selected
	$(document).on('change', 'section.sign-up select.user-select', function() {
		if ( $(this).val() == 'create-new-user' ) {
			$(this).parents('.user').html( $('.create-user-template').html() );
		}
	});

	// Remove the create user form if "Cancel" is pressed
	$(document).on('click', 'section.sign-up .button-area button.cancel-btn', function(e) {
		e.preventDefault();

		$(this).parents('.user').html( $('.select-user-template').html() );
	});

	// Remove the select user li if the x is pressed
	$(document).on('click', 'section.sign-up .btn-group button.cancel-btn', function(e) {
		e.preventDefault();

		$(this).parents('.user').remove();
	});
	
});