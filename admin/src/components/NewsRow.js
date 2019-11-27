import React from 'react'
import moment from 'moment'

class NewsTable extends React.Component {
	render () {
		const news = this.props.news
		return (
			<tr>
				<td>{moment(news.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')}</td>
				<td>{moment(news.event_time * 1000).format('YYYY-MM-DD')}</td>
				<td>{news.title}</td>
				<td>{news.summary}</td>
				<td>{news.thumbnail}</td>
				<td>{news.content}</td>
			</tr>
		)
	}
}

export default NewsTable