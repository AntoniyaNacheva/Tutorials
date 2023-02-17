const Course = require('../models/Course');


async function getAllByDate() {
	return Course.find({}).sort({ createdAt: 1 }).lean();
}

async function getRecent() {
	return Course.find({}).sort({ userCount: -1 }).limit().lean();
}

async function createCourse(course) {
	return Course.create(course); 3
}

async function getById(id) {
	return Course.findById(id).lean();
}

async function deleteById(id) {
	return Course.findByIdAndDelete(id);
}

module.exports = {
	getAllByDate,
	getRecent,
	createCourse,
	getById,
	deleteById
};