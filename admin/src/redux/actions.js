import { NEWS_CHANGE, INPUT_CHANGE } from './actionTypes'

export default {
	news_change (news) {
		return { type: NEWS_CHANGE, payload: { news } }
	},
	input_change (value) {
		return { type: INPUT_CHANGE, payload: { value } }
	}
}