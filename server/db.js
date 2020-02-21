const { promisify } = require('util')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

mongoose.connectAsync = promisify(mongoose.connect).bind(mongoose)

let MONGO_URL
if (process.env.NODE_ENV === 'development') {
	MONGO_URL = `mongodb://localhost:27017/${process.env.MONGODB_DB}`
} else {
	MONGO_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-rofhu.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
}

const connection = async () => {
	console.log(`Connect to mongoose`)
	await mongoose.connectAsync(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	
	const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	console.log('Connect to mongo')
	await client.connect()
	const db = client.db(process.env.MONGODB_DB)
	return db
}

module.exports = {
	connection,
}
