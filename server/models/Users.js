const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	salt: { type: String, required: true }
})

mongoose.model('User', UserSchema)
