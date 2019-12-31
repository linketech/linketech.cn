const Koa = require('koa')
const body = require('koa-body')
const koajwt = require('koa-jwt')
const cors = require('@koa/cors')
const mongoose = require('mongoose')

const app = new Koa()
const router = require('./server/router')
const util_mongodb = require('./server/db')

const port = process.env.PORT || 8080

mongoose.connect(util_mongodb.MONGO_URL, { useUnifiedTopology: true }, (err, db) => {
	if (!err) {
		console.log(`Connected to ${util_mongodb.MONGO_URL}`)
	} else {
		throw new Error('Failed to connect mongoose')
	}
})

app.use(cors({
	origin: '*'
}))
app.use(body({ multipart: true }))
app.use(async (ctx, next) => {
	try {
		if (!ctx.db) {
			app.context.db = await util_mongodb.connection()
		}
		await next()
	} catch (err) {
		if (err.status === 401 || err.statusCode === 401) {
			ctx.status = 401
			ctx.body = {
				status: ctx.status,
				message: 'user has not logined yet or session expired',
				data: []
			}
			return
		}
		ctx.status = err.statusCode || err.status || 500
		ctx.body = {
			status: ctx.status,
			message: err.message,
			data: []
		}
		ctx.app.emit('error', err, ctx)
	}
})
app.use(koajwt({
	secret: process.env.JWT_SECRET,
	cookie: 'token'
}).unless({
	path: [/\/api\/user\/login/, /\/api\/user\/register/, /\/api\/user\/check/]
}))
app.use((() => {
	const MAX = 1024
	function tldr (json) {
		if (json !== undefined && json !== null) {
			const string = JSON.stringify(json)
			return string.length > MAX ? `${string.substring(0, MAX)}...` : string
		}
		return json
	}
	return async ({ request, response }, next) => {
		console.info(request.ip, request.protocol, request.method, request.url, '>>', tldr(request.body))
		await next()
		console.info(request.ip, request.protocol, request.method, request.url, '<<', response.status, tldr(response.body))
	}
})())
app.use(router.routes(), router.allowedMethods())
app.use(async (ctx, next) => {
	const rex = /\/api\/\w+/
	if (!rex.test(ctx.url)) {
		console.info('redirecting to /home')
		ctx.redirect('/')
	}
})

app.listen(port, () => {
	console.log(`server is listening on port ${port}`)
})
