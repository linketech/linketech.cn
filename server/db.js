const { promisify } = require('util')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')

mongoose.connectAsync = promisify(mongoose.connect).bind(mongoose)

const MONGO_URL = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}?retryWrites=true&w=majority`

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
