import { NEWS_CHANGE, DATE_CHANGE, FOCUSE_CHANGE, RESET_NEWS, SELECTED_ITEMS_CHANGE, SELECT_MODE_CHANGE, PARENT_ITEMS_CHANGE, LOGIN_STATUS_CHANGE } from './actionTypes'

export default {
	news_change (news) {
		return { type: NEWS_CHANGE, payload: { news } }
	},
	date_change (date) {
		return { type: DATE_CHANGE, payload: { date } }
	},
	focuse_change (focused) {
		return { type: FOCUSE_CHANGE, payload: { focused } }
	},
	reset_news () {
		return { type: RESET_NEWS }
	},
	selected_items_change (items) {
		return { type: SELECTED_ITEMS_CHANGE, payload: { items } }
	},
	select_mode_change (select_mode) {
		return { type: SELECT_MODE_CHANGE, payload: { select_mode } }
	},
	parent_items_change (parent_items) {
		return { type: PARENT_ITEMS_CHANGE, payload: { parent_items } }
	},
	login_status_change (isLogin, userId, username) {
		return { type: LOGIN_STATUS_CHANGE, payload: { isLogin, userId, username } }
	}
}