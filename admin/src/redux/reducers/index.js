import moment from "moment"
import { NEWS_CHANGE, INPUT_CHANGE, DATE_CHANGE, FOCUSE_CHANGE, RESET_NEWS, SELECTED_ITEMS_CHANGE, SELECT_MODE_CHANGE, PARENT_ITEMS_CHANGE } from '../actionTypes'

function getInitialState () {
	return {
		news: [],
		input: '',
		date: moment(),
		focused: false,
		items: [],
		select_mode: false,
		parent_items: []
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

		case SELECTED_ITEMS_CHANGE:
			const { items } = action.payload
			return { ...state, items }

		case SELECT_MODE_CHANGE:
			const { select_mode } = action.payload
			return { ...state, select_mode }

		case PARENT_ITEMS_CHANGE:
			const { parent_items } = action.payload
			return { ...state, parent_items }

		default:
			return state
	}
}