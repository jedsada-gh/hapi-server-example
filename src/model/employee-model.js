const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
	id: String,
	company_id: String,
    username: String,
    password: String,
    display_frist_name: String,
    display_middle_name: String,
    display_last_name: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    email: String,
});

module.exports = mongoose.model('Employee', EmployeeSchema);