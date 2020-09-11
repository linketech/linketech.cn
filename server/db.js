const { MongoClient, ObjectID } = require('mongodb')

const MONGO_URL = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}?retryWrites=true&w=majority`
// console.log(MONGO_URL)

const connection = async () => {
	const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
	console.log('Connect to mongo')
	await client.connect()
	const db = client.db(process.env.MONGODB_DB)
	return db
}

module.exports = {
	connection,
	ObjectID,
}
