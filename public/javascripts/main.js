// JQUERY DOCUMENT READY --------------
$(function() {

	// SKROLLR - init and disable on mobile
	if( $(window).width() > 767 ) {
		skrollr.init({
			forceHeight: false
		});
	}
	
});