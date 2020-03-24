const createError = require("http-errors");
const phones = require("../constants/phoneList.json");

// Phones endpoint

module.exports.getPhones = (req, res, next) => {
	console.log({phones})
	res.json({phones})
};
