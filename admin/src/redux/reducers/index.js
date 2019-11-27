import moment from "moment"
import { NEWS_CHANGE, INPUT_CHANGE, DATE_CHANGE, FOCUSE_CHANGE, RESET_NEWS } from '../actionTypes'

function getInitialState () {
	return {
		news: [],
		input: '',
		date: moment(),
		focused: false
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

		case DATE_CHANGE:
			const { date } = action.payload
			return { ...state, date }

		case FOCUSE_CHANGE:
			const { focused } = action.payload
			return { ...state, focused }

		case RESET_NEWS:
			return { ...state, news: [] }

		default:
			return state
	}
}