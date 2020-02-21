const request = require('request')
const Koa = require('koa')
const body = require('koa-body')
const koajwt = require('koa-jwt')
const cors = require('@koa/cors')
const router = require('./server/router')

const port = process.env.PORT || 8080
const app = new Koa()

app.use(cors({
	origin: '*',
	credentials: true,
}))

app.use(body({ multipart: true }))

app.use(async (ctx, next) => {
	try {
		await next()
	} catch (err) {
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
	cookie: 'token',
	passthrough: true,
}))

const MAX = 1024
const tldr = json => {
	if (json !== undefined && json !== null) {
		const string = JSON.stringify(json)
		return string.length > MAX ? `${string.substring(0, MAX)}...` : string
	}
	return json
}
app.use(async ({ request, response, state: { user: { username = 'anonymous' } = {} } }, next) => {
	console.info(username, request.ip, request.protocol, request.method, request.url, '>>', tldr(request.body))
	await next()
	console.info(username, request.ip, request.protocol, request.method, request.url, '<<', response.status, tldr(response.body))
})

app.use(router.routes(), router.allowedMethods())
app.use(async (ctx) => {
	if (ctx.url === '/') {
		ctx.body = 'welcome home'
		return
	}

	if (ctx.method === 'GET' && ctx.status === 404) {
		console.info(ctx.url, 'redirecting to /home')
		ctx.body = request(`http://localhost:${port}/`)
	}
})

app.listen(port, () => {
	console.log(`server is listening at port ${port}`)
})
