const Koa = require('koa')
const body = require('koa-body')
const cors = require('@koa/cors')

const app = new Koa()
const router = require('./server/router')
const util_mongodb = require('./server/db')

const port = process.env.PORT || 8080

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
		ctx.response.status = err.statusCode || err.status || 500
		ctx.response.body = {
			message: err.message,
		}
		ctx.app.emit('error', err, ctx)
	}
})
app.use(router.routes(), router.allowedMethods())
app.use(async (ctx, next) => {
	const rex = /\/api\/\w+/
	if (!rex.test(ctx.url)) {
		console.info('redirecting to /home')
		ctx.redirect('/')
	}
})
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

app.listen(port, () => {
	console.log(`server is listening on port ${port}`)
})
