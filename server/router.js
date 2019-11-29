const Router = require('koa-router')
const moment = require('moment')
const crypto = require('crypto')
const rp = require('request-promise')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = require('./models/user')
const util_mongodb = require('./db')

const router = new Router()
mongoose.connect(util_mongodb.MONGO_URL, { useUnifiedTopology: true })

const verifyInput = (uname, pwd, ctx) => {
	if (uname === null || pwd === null) {
		return false
	}
	return true
}

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

router.post('/register', async (ctx, next) => {
	const { username = null, password = null } = ctx.request.body || {}
	const isParmasValid = verifyInput(username, password)
	if (!isParmasValid) {
		ctx.status = 400
		return (ctx.body = {
			status: ctx.status,
			message: 'username and password can not be null',
			data: [],
		})
	}
	try {
		const isUserExists = await User.findOne({ username })
		if (!isUserExists) {
			const { salt, hash } = setPassword(password)
			const user = new User({
				username,
				password: hash,
				salt,
			})
			await user.save()
			ctx.status = 200
			ctx.body = {
				status: ctx.status,
				message: 'register succeed',
				data: [],
			}
		} else {
			ctx.status = 200
			ctx.body = {
				status: ctx.status,
				message: 'register failed, username existed',
				data: [],
			}
		}
	} catch (err) {
		console.error(err.stack)
		ctx.status = 500
		ctx.body = {
			status: ctx.status,
			message: 'server error',
			data: [],
		}
	}
})

router.post('/login', async (ctx, next) => {
	const { username = null, password = null } = ctx.request.body || {}
	const isParmasValid = verifyInput(username, password)
	if (!isParmasValid) {
		ctx.status = 400
		return (ctx.body = {
			status: ctx.status,
			message: 'username and password can not be null',
			data: [],
		})
	}

	try {
		const user = await User.findOne({ username })
		if (!user) {
			ctx.status = 404
			ctx.body = {
				status: ctx.status,
				message: 'username not exists',
				data: [],
			}
		}
		const isPasswordValid = validPassword(password, user.hash, user.salt)
		if (!isPasswordValid) {
			ctx.status = 401
			ctx.body = {
				status: ctx.status,
				message: 'incorrect password',
				data: [],
			}
		}
		const payload = {
			_id: user._id,
			username: user.username,
		}
		const token = generateJWT(payload)
		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'login succeed',
			data: token,
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

router.get('/news', async (ctx) => {
	try {
		const news_list = await ctx.db
			.collection('news')
			.find()
			.toArray()
		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'success',
			data: news_list,
		}
	} catch (error) {
		console.error(error.stack)
	}
})

router.post('/news', async (ctx) => {
	console.log(`ctx.request.body: ${JSON.stringify(ctx.request.body)}`)
	const { input, page_url, event_time } = ctx.request.body
	const et_ms = (new Date(event_time)).valueOf()
	const isShimo = /shimo\.im/.test(input)
	const isWeixin = /weixin\.qq\.com/.test(input)

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
				$(ele).attr('src', `/api/img/?url=${imgs[ i ]}`)
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
				$(ele).attr('src', `/api/img/?url=${imgs[ i ]}`)
			})
			content = $('#js_content')
				.html()
				.trim()
		}

		summary = p.filter((item) => item !== '')[ 0 ]
		// 后端入口为 /api/
		thumbnail = `/api/img/?url=${imgs[ 0 ]}`
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
			ctx.body = {
				status: ctx.status,
				message: 'Insert failed',
				data: [],
			}
		}
		const data = await ctx.db
			.collection('news')
			.find({ project })
			.toArray()
		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'success',
			data,
		}
	} else {
		ctx.body = {
			status: 400,
			message: 'invalid params',
			data: [],
		}
	}
})

router.get('/linke', async (ctx) => {
	try {
		const news_list = await ctx.db
			.collection('news')
			.find({ project: 'linke' })
			.toArray()
		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'This is news of linke',
			data: news_list,
		}
	} catch (error) {
		console.error(error.stack)
	}
})

router.get('/dbj', async (ctx) => {
	try {
		const news_list = await ctx.db
			.collection('news')
			.find({ project: 'dbj' })
			.toArray()
		ctx.status = 200
		ctx.body = {
			status: ctx.status,
			message: 'This is news of dbj',
			data: news_list,
		}
	} catch (error) {
		console.error(error.stack)
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
	}
})

module.exports = router
