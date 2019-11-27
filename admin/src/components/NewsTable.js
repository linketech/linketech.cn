import React from 'react'
import NewsRow from './NewsRow'
import NewsContext from './news-context'
import { Spinner } from './spinner'

class NewsTable extends React.Component {
	render () {
		console.log(`props: ${JSON.stringify(this.props)}`)
		const rows = []
		const project_name = (this.props.section_url.split('/'))[ 1 ]
		const filtered_list = this.context.filter(e => e.project === project_name)
		filtered_list.forEach((ele) => {
			rows.push(
				<NewsRow news={ele} key={ele._id}></NewsRow>
			)
		})
		return (
			<div className="newstable">
				<h1>NewsTable</h1>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>EventTime</th>
							<th>Title</th>
							<th>Summary</th>
							<th>Thumbnail</th>
							<th>Content</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<Spinner />
			</div>
		)
	}
}
NewsTable.contextType = NewsContext

export default NewsTable