const homeController = require('express').Router();

// TODO: replace with real controller 
homeController.get('/', (req, res) => {
	let view;
	let courses = [];

	if (req.user) {
		view = 'user-home';
	} else {
		view = 'guest-home';
	}

	res.render(view, {
		title: 'Home Page',
		courses
	});
});

module.exports = homeController;