const courseController = require('express').Router();

courseController.get('/create', (req, res) => {
	res.render('create', {
		title: 'Create Course'
	});
});

module.exports = courseController;