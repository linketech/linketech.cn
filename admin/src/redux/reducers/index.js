import moment from "moment"
import { NEWS_CHANGE, DATE_CHANGE, FOCUSE_CHANGE, RESET_NEWS, SELECTED_ITEMS_CHANGE, SELECT_MODE_CHANGE, PARENT_ITEMS_CHANGE, LOGIN_STATUS_CHANGE } from '../actionTypes'

function getInitialState () {
	return {
		news: [],
		date: moment(),
		focused: false,
		items: [],
		select_mode: false,
		parent_items: [],
		isLogin: false,
		userId: null,
		username: null
	}
}

export default function (state = getInitialState(), action) {
	switch (action.type) {
		case NEWS_CHANGE:
			const { news } = action.payload
			return { ...state, news }

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

		case LOGIN_STATUS_CHANGE:
			const { isLogin, userId, username } = action.payload
			return { ...state, isLogin, userId, username }

		default:
			return state
	}
}