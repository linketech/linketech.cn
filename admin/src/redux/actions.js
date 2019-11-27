import { NEWS_CHANGE, INPUT_CHANGE, DATE_CHANGE, FOCUSE_CHANGE, RESET_NEWS } from './actionTypes'

export default {
	news_change (news) {
		return { type: NEWS_CHANGE, payload: { news } }
	},
	input_change (value) {
		return { type: INPUT_CHANGE, payload: { value } }
	},
	date_change (date) {
		return { type: DATE_CHANGE, payload: { date } }
	},
	focuse_change (focused) {
		return { type: FOCUSE_CHANGE, payload: { focused } }
	},
	reset_news () {
		return { type: RESET_NEWS }
	}
}