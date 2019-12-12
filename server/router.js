const Router = require('koa-router')
const moment = require('moment')
const crypto = require('crypto')
const rp = require('request-promise')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

require('./models/Users')

const util_mongodb = require('./db')
const User = mongoose.model('User')

const prefix = '/api'
const router = new Router({ prefix })
mongoose.connect(util_mongodb.MONGO_URL, { useUnifiedTopology: true })

const setPassword = (pwd) => {
	const salt = crypto.randomBytes(16).toString('hex')
	const hash = crypto.pbkdf2Sync(pwd, salt, 1000, 64, 'sha512').toString('hex')
	return {
		salt,
		hash,
	}
}

const validPassword = (password, hash, salt) => {
	const new_hash = crypto
		.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
		.toString('hex')

	return new_hash === hash
}

const generateJWT = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })
}

router.get('/', async (ctx) => {
	ctx.status = 200
	ctx.body = {
		status: ctx.status,
		message: 'This is home of news-admin project',
		data: [],
	}
})

router.post('/user/check' ,async (ctx) => {
	const { username = null } = ctx.request.body || {}
	const isUserExists = await User.findOne({ username })
	if (isUserExists !== null) {
		ctx.status = 400
		return (ctx.body = {
			status: ctx.status,
			message: 'username has been used',
			data: [],
		})
	}
	ctx.status = 200
	ctx.body = {
		status: ctx.status,
		message: 'ok',
		data: [],
	}
})

router.post('/user/register', async (ctx) => {
	const { username = null, password = null, phone = null } = ctx.request.body || {}
	try {
		const { salt, hash } = setPassword(password)
		const user = new User({
			username,
			password: hash,
			salt,
			phone
		})
		await user.save()
		ctx.status = 200
		return ctx.body = {
			status: ctx.status,
			message: 'register succeed',
			data: [],
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.post('/user/login', async (ctx) => {
	const { username = null, password = null } = ctx.request.body || {}
	try {
		const user = await User.findOne({ username })
		if (!user) {
			ctx.status = 404
			return (ctx.body = {
				status: ctx.status,
				message: 'username not exists',
				data: [],
			})
		}
		const isPasswordValid = validPassword(password, user.password, user.salt)
		if (!isPasswordValid) {
			ctx.status = 400
			return (ctx.body = {
				status: ctx.status,
				message: 'incorrect password',
				data: [],
			})
		}
		const payload = {
			_id: user._id,
			username: user.username,
		}
		const token = generateJWT(payload)
		ctx.status = 200
		ctx.cookies.set('userId', payload._id, { maxAge: 86400000 })
		ctx.cookies.set('token', token, { maxAge: 86400000 })
		ctx.body = {
			status: ctx.status,
			message: 'login succeed',
			data: {
				userId: payload._id,
				username: payload.username,
				token
			},
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.get('/user/info', async (ctx) => {
	const userId = ctx.cookies.get('userId')
	const token = ctx.cookies.get('token')
	if (!userId || !token) {
		ctx.status = 401
		return (ctx.body = {
			status: ctx.status,
			message: 'user has not logined yet',
			data: []
		})
	}
	try {
		const docs = await User.findOne({ _id: mongoose.Types.ObjectId(userId) })
		if (docs === null) {
			ctx.status = 404
			return (ctx.body = {
				status: ctx.status,
				message: 'user not exists',
				data: [],
			})
		}
		ctx.status = 200
		return ctx.body = {
			status: ctx.status,
			message: 'user has logined',
			data: docs,
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.get('/user/logout', async (ctx, next) => {
	ctx.cookies.set('userId', '', { maxAge: 0 })
	ctx.cookies.set('token', '', { maxAge: 0 })
	ctx.status = 200
	ctx.body = {
		status: ctx.status,
		message: 'logout succeed',
		data: [],
	}
})

router.get('/news', async (ctx) => {
	try {
		const news_list = await ctx.db
			.collection('news')
			.find()
			.sort({ event_time: -1, timestamp: -1 })
			.toArray()

		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'query succeed',
			data: news_list,
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.post('/news', async (ctx) => {
	const { input, page_url, event_time } = ctx.request.body
	const et_ms = (new Date(event_time)).valueOf()
	const isShimo = /shimo\.im/.test(input)
	const isWeixin = /weixin\.qq\.com/.test(input)

	try {
		if (page_url && (isShimo || isWeixin)) {
			const project = page_url
			const options = {
				url: input,
				transform: function (body) {
					return cheerio.load(body)
				},
			}
			const $ = await rp(options)
			const p = []
			const imgs = []
			// 根据来源，新闻的处理会有所不同
			let title
			let content
			let summary
			let thumbnail

			if (isShimo) {
				title = $('#editor .ql-title-box ').data().value
				$('.ql-editor p').map((i, ele) => {
					p[ i ] = $(ele).text()
				})
				$('img').map((i, ele) => {
					imgs[ i ] = $(ele).data('src')
					$(ele).attr('src', `${prefix}/img/${crypto.createHash('md5').update(imgs[ i ]).digest("hex")}.file?url=${encodeURIComponent(imgs[ i ])}`)
				})
				content = $('.ql-editor').html()
				// 第一段有可能是空行，要确保 summary 有内容
			} else if (isWeixin) {
				title = $('#activity-name')
					.text()
					.trim()
				$('#js_content span').map((i, ele) => {
					p[ i ] = $(ele).text()
				})
				$('#js_content img').map((i, ele) => {
					imgs[ i ] = $(ele).data('src')
					$(ele).attr('src', `${prefix}/img/${crypto.createHash('md5').update(imgs[ i ]).digest("hex")}.file?url=${encodeURIComponent(imgs[ i ])}`)
				})
				content = $('#js_content')
					.html()
					.trim()
			}

			summary = p.filter((item) => item !== '')[ 0 ]
			thumbnail = `/img/${encodeURIComponent(imgs[ 0 ])}`
			const rs = await ctx.db.collection('news').insertOne({
				project,
				timestamp: moment().unix(),
				event_time: moment(et_ms).unix(),
				title,
				summary,
				thumbnail,
				content,
			})
			if (!rs.insertedId || rs.insertedId === null) {
				ctx.status = 400
				return (ctx.body = {
					status: ctx.status,
					message: 'Insert failed',
					data: [],
				})
			}
			const data = await ctx.db
				.collection('news')
				.find({ project })
				.sort({ event_time: -1, timestamp: -1 })
				.toArray()

			ctx.status = 200
			ctx.body = {
				status: ctx.status,
				message: 'success',
				data,
			}
		} else {
			ctx.status = 400
			ctx.body = {
				status: ctx.status,
				message: 'invalid params',
				data: [],
			}
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.delete('/news', async (ctx) => {
	console.log(`ctx.query: ${JSON.stringify(ctx.query)}`)
	const params = ctx.query.id
	try {
		if (typeof params === 'string') {
			console.log('string')
			await ctx.db.collection('news').deleteOne({ _id: mongoose.Types.ObjectId(params) })
			ctx.status = 200
			return (ctx.body = {
				status: ctx.status,
				message: 'Delete succeed',
				data: [],
			})
		}
		else if (params instanceof Array) {
			console.log('array')
			const promise_arr = params.map(e => ctx.db.collection('news').deleteOne({ _id: mongoose.Types.ObjectId(e) }))
			await Promise.all(promise_arr)
			ctx.status = 200
			return (ctx.body = {
				status: ctx.status,
				message: 'Delete succeed',
				data: [],
			})
		}
		else {
			ctx.status = 400
			return (ctx.body = {
				status: ctx.status,
				message: 'invalid params',
				data: [],
			})
		}
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.get('/img', async (ctx) => {
	try {
		const options = {
			url: ctx.query.url,
			encoding: null,
		}
		const img = await rp.get(options)
		ctx.status = 200
		ctx.body = img
	} catch (error) {
		console.error(error.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.get('/img/:filename', async (ctx) => {
	const url = decodeURIComponent(ctx.params.filename)
	try {
		const res = await rp({
			method: 'GET',
			url: ctx.query.url || url,
			encoding: null,
			resolveWithFullResponse: true,
			simple: false,
			headers: {
				'if-none-match': ctx.headers[ 'if-none-match' ] || '',
			},
		})
		ctx.status = res.statusCode
		ctx.body = res.body
		ctx.set('ETag', res.headers[ 'etag' ])
	} catch (error) {
		console.error(error.stack)
	}
})

module.exports = router
