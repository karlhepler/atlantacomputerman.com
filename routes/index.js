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