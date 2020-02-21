const Router = require('koa-router')
const moment = require('moment')
const crypto = require('crypto')
const rp = require('request-promise')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

require('./models/Users')

const User = mongoose.model('User')

const prefix = '/api'
const router = new Router({ prefix })

function ctxEnd({ctx, status = 200, message, data = []} = {}) {
	ctx.status = status
	ctx.body = { status, message, data }
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

const generateJWT = (payload, expiresIn) => {
	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn })
}

router.get('/', async (ctx) => {
	ctxEnd({ ctx, message: 'This is home of news-admin project' })
})

router.post('/user/check' ,async (ctx) => {
	const { username = null } = ctx.request.body || {}
	const isUserExists = await User.findOne({ username })
	if (isUserExists !== null) {
		ctxEnd({ ctx, status: 409, message: 'username has been used' })
		return
	}
	ctxEnd({ ctx, message: 'ok' })
})

router.post('/user/register', async (ctx) => {
	const { username = null, password = null, phone = null } = ctx.request.body || {}
	const { salt, hash } = setPassword(password)
	if (!username || !password || !phone) {
		ctxEnd({ ctx, status: 400, message: 'Please fill all fields' })
		return
	}
	const user = new User({
		username,
		password: hash,
		salt,
		phone
	})
	await user.save()
	ctxEnd({ ctx, message: 'register succeed' })
})

router.post('/user/login', async (ctx) => {
	const { username = null, password = null } = ctx.request.body
	const user = await User.findOne({ username })
	const exp = 3600 * 2 * 1000
	if (!user) {
		ctxEnd({ ctx, status: 404, message: 'username not exists' })
		return
	}
	const isPasswordValid = validPassword(password, user.password, user.salt)
	if (!isPasswordValid) {
		ctxEnd({ ctx, status: 400, message: 'incorrect password' })
		return
	}
	const payload = {
		_id: user._id,
		username: user.username,
	}
	const token = generateJWT(payload, exp)
	ctx.cookies.set('token', token, { maxAge: exp })
	ctxEnd({
		ctx,
		message: 'incorrect password',
		data: {
			userId: payload._id,
			username: payload.username,
			token
		}
	})
})

router.get('/user/status', async (ctx) => {
	const token = ctx.cookies.get('token')
	const decoded = jwt.decode(token, process.env.JWT_SECRET)
	if (!token) {
		ctxEnd({ ctx, status: 401, message: 'user has not logined yet' })
		return
	}
	ctxEnd({ ctx, message: 'user has logined', data: decoded })
})

router.get('/user/logout', async (ctx, next) => {
	ctx.cookies.set('token')
	ctxEnd({ ctx, message: 'logout success' })
})

router.get('/news', async (ctx) => {
	const news_list = await ctx.db
		.collection('news')
		.find()
		.sort({ event_time: -1, timestamp: -1 })
		.toArray()

	ctxEnd({ ctx, message: 'query success', data: news_list })
})

router.post('/news', async (ctx) => {
	const { input, page_url, event_time } = ctx.request.body
	const et_ms = (new Date(event_time)).valueOf()
	const isShimo = /shimo\.im/.test(input)
	const isWeixin = /weixin\.qq\.com/.test(input)
	const toImgQs = url => `${crypto.createHash('md5').update(url).digest('hex')}.file?url=${encodeURIComponent(url)}`

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
				p[i] = $(ele).text()
			})
			$('img').map((i, ele) => {
				imgs[i] = $(ele).data('src')
				$(ele).attr('src', `${prefix}/img/${toImgQs(imgs[i])}`)
			})
			content = $('.ql-editor').html()
			// 第一段有可能是空行，要确保 summary 有内容
		} else if (isWeixin) {
			title = $('#activity-name')
				.text()
				.trim()
			$('#js_content span').map((i, ele) => {
				p[i] = $(ele).text()
			})
			$('#js_content img').map((i, ele) => {
				imgs[i] = $(ele).data('src')
				$(ele).attr('src', `${prefix}/img/${toImgQs(imgs[i])}`)
			})
			content = $('#js_content')
				.html()
				.trim()
		}

		summary = p.filter((item) => item !== '')[0]
		thumbnail = `${prefix}/img/${toImgQs(imgs[0])}`
		const rs = await ctx.db.collection('news').insertOne({
			project,
			timestamp: moment().unix(),
			event_time: moment(et_ms).unix(),
			title,
			summary,
			thumbnail,
			content,
		})
		if (!rs.insertedId) {
			ctxEnd({ ctx, status: 400, message: 'Insert failed' })
			return
		}
		const data = await ctx.db
			.collection('news')
			.find({ project })
			.sort({ event_time: -1, timestamp: -1 })
			.toArray()


		ctxEnd({ ctx, message: 'success', data })
	} else {
		ctxEnd({ ctx, status: 400, message: 'invalid params' })
	}
})

router.delete('/news', async (ctx) => {
	let params = ctx.query.id
	if (typeof params === 'string') {
		params = [params]
	}
	if (params instanceof Array) {
		const objectid_arr = params.map(e => mongoose.Types.ObjectId(e))
		const rs = await ctx.db.collection('news').deleteMany({ _id: { $in: objectid_arr } })
		if (rs.deletedCount !== params.length) {
			ctxEnd({ ctx, status: 500, message: 'Delete failed, database error' })
			return
		}
		ctxEnd({ ctx, message: 'Delete succeed' })
		return
	}

	ctxEnd({ ctx, status: 400, message: 'invalid params' })
})

router.get('/img', async (ctx) => {
	const options = {
		url: ctx.query.url,
		encoding: null,
	}
	const img = await rp.get(options)
	ctx.status = 200
	ctx.body = img
})

router.get('/img/:filename', async (ctx) => {
	const url = decodeURIComponent(ctx.params.filename)
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
})

module.exports = router
