const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema({
	name: String
});

module.exports = mongoose.model('User', UserInfoSchema);