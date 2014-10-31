exports.index = function(req, res){
  res.render('index', { title: 'Home', menuItem: 'home' });
};

exports.contactUs = function(req, res) {
	res.render('contact-us', { title: 'Contact Us', menuItem: 'contact-us' });
}

exports.termsOfService = function(req, res) {
	res.render('terms-of-service', { title: 'Terms of Service', menuItem: 'terms-of-service' });
}

exports.privacyStatement = function(req, res) {
	res.render('privacy-statement', { title: 'Privacy Statement', menuItem: 'privacy-statement' });
}

exports.onsiteCostCalculator = function(req, res) {
	res.render('onsite-cost-calculator', { title: 'On-Site Cost Calculator', menuItem: 'onsite-cost-calculator' });
}

exports.services = function(req, res) {
	res.render('services', { title: 'Services', menuItem: 'services' });
}

exports.servicesFamilies = function(req, res) {
	res.render('services-families', { title: 'Services for Families', menuItem: 'services-families' });
}

exports.servicesStudents = function(req, res) {
	res.render('services-students', { title: 'Services for Students', menuItem: 'services-students' });
}

exports.servicesSeniors = function(req, res) {
	res.render('services-seniors', { title: 'Services for Seniors', menuItem: 'services-seniors' });
}

exports.ourStory = function(req, res) {
	res.render('our-story', { title: 'Our Story', menuItem: 'our-story' });
}

exports.signUp = function(req, res) {
	res.render('sign-up', { title: 'Sign Up', menuItem: 'sign-up' });
}

exports.explanationOfOurServices = function(req, res) {
	res.render('explanation-of-our-services', { title: 'Explanation of Our Services', menuItem: 'explanation-of-our-services' });
}

exports.quickContact = function(req, res) {
	Validator = require('validator.js');
	var Assert = Validator.Assert,
	    validator = new Validator.Validator();

	var constraint = {
		'comment': new Assert().NotBlank(),
		'name': new Assert().NotBlank(),
		'email': new Assert().Email()
	};

	var isValid = validator.validate(req.body, constraint);

	if ( isValid ) {
		console.log(req.body);

		// We have verified that all fields have been filled - now send to ZenDesk
		var zendesk = require('node-zendesk'),
		    fs      = require('fs');

		var client = zendesk.createClient({
		  username:  'atlantacomputerman@gmail.com',
		  token:     '1Kb0XYfLXtCAXu3j29D1Uf3Oxomn2upcERGDWJer',
		  remoteUri: 'https://atlantacomputerman.zendesk.com/api/v2'
		});

		var request = {
			"ticket": {
				"subject": "New Quick Contact Support Request - 24 Hour Response",
				"comment": { "body": req.body.comment },
				"requester": { "locale_id": 1, "name": req.body.name, "email": req.body.email }
			}
		};

		client.tickets.create(request, function(zen_err, zen_req, zen_res ) {
			if (zen_err) {
				res.send(zen_err);
				return;
			}
			else {
				res.send(zen_res);
				return;
			}
		});
	}
	else {
		res.send( isValid );
	}
}

exports.contact = function(req, res) {
	Validator = require('validator.js');
	var Assert = Validator.Assert,
	    validator = new Validator.Validator();

	var constraint = {
		'first': new Assert().NotBlank(),
		'last': new Assert().NotBlank(),		
		'email': new Assert().Email(),
		'phone': new Assert().NotBlank()
	};

	var isValid = validator.validate(req.body, constraint);

	if ( isValid ) {
		console.log(req.body);

		// We have verified that all fields have been filled - now send to ZenDesk
		var zendesk = require('node-zendesk'),
		    fs      = require('fs');

		var client = zendesk.createClient({
		  username:  'atlantacomputerman@gmail.com',
		  token:     '1Kb0XYfLXtCAXu3j29D1Uf3Oxomn2upcERGDWJer',
		  remoteUri: 'https://atlantacomputerman.zendesk.com/api/v2'
		});

		var request = {
			"ticket": {
				"subject": "New Contact - 24 Hour Response",
				"comment": { "body": "INFORMATION SUBMITTED:\n\nNAME: "+req.body.first+" "+req.body.last+"\nEMAIL: "+req.body.email+"\nPHONE: "+req.body.phone },
				"requester": { "locale_id": 1, "name": req.body.first+' '+req.body.last, "email": req.body.email, "phone": req.body.phone }
			}
		};

		client.tickets.create(request, function(zen_err, zen_req, zen_res ) {
			if (zen_err) {
				res.send(zen_err);
				return;
			}
			else {
				res.send(zen_res);
				return;
			}
		});
	}
	else {
		res.send( isValid );
	}
}