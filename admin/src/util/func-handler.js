const wrapperPromiseFunc = (fn) => {
	return new Promise(resolve =>
		resolve(fn())).catch(e => console.error(e.stack))
}

const wrapperFetch = async (url, options = { method: 'GET', mode: 'cors' }, data) => {
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
	wrapperPromiseFunc,
	wrapperFetch
}
