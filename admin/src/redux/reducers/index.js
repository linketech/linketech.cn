import { NEWS_CHANGE, INPUT_CHANGE } from '../actionTypes'

function getInitialState () {
	return {
		news: [],
		input: ''
	}
}

export default function (state = getInitialState(), action) {
	switch (action.type) {
		case NEWS_CHANGE:
			const { news } = action.payload
			return { ...state, news }

		case INPUT_CHANGE:
			const { value } = action.payload
			return { ...state, input: value }

		default:
			return state
	}
}