const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	salt: String,
})

mongoose.model('User', UserSchema)
