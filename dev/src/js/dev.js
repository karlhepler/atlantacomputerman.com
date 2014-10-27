$(function() {

	// Load fonts ---------------------------
	WebFontConfig = {
	    google: { families: [ 'Oswald:700', 'Voltaire' ]
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
		$('footer .left ul, .product-box .pow .deal, .product-box .features, .product-box .price, .product-box .terms-area, .product-box .slash-area, .product-box .button-area, .product-box .title').slabText();
	}	
});