const mongoose = require('mongoose');

const products = mongoose.Schema({
	img: {
		type: String,
		required: true,
		default: ""
	},
	name: {
		type: String,
		required: true,
		default: ""
	},
	variations: {
		type: Object,
		required: true,
		default: ""
	},
	description: {
		type: String,
		required: true,
		default: ""
	}
});


module.exports = mongoose.model('products', products);
