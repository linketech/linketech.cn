const wrapperFetch = async (url, options = { method: 'GET' }, data) => {
	options.mode = 'cors'
	const opt = Object.assign({}, options)
	try {
		if (opt.method === 'POST' || opt.method === 'PUT') {
			opt.body = JSON.stringify(data)
			opt.headers = {
				'content-type': 'application/json'
			}
		}
		const response = await fetch(url, opt)
		const body = response.json()
		return body
	} catch (error) {
		console.error(error.stack)
	}
}

export {
	wrapperFetch
}
