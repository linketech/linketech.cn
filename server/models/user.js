const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	salt: String,
})

module.export = mongoose.model('User', UserSchema)
