const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
	username: String,
	first_name: String,
	last_name: String,
	age: Number
});

module.exports = mongoose.model('User', UserInfoSchema);