const wrapperPromiseFunc = (fn) => {
	return new Promise(resolve =>
		resolve(fn.apply(this, this.arguments))).catch(e => console.error(e.stack))
}

const wrapperFetch = async (url, options = { method: 'GET' }) => {
	try {
		const response = await fetch(url, options)
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
