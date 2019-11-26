const { MongoClient } = require('mongodb')

const MONGO_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-rofhu.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`
const client = new MongoClient(MONGO_URL, { useNewUrlParser: true })

const connection = async () => {
	await client.connect()
	console.log('Connected correctly to server')
	const db = client.db(process.env.MONGODB_DB)
	return db
}

module.exports = {
	connection,
	MONGO_URL,
}
