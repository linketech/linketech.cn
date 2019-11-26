import React from 'react'
import NewsTable from './NewsTable'
import AddNewsForm from './AddNewsForm'

class Section extends React.Component {
	render () {
		return (
			<div className="section">
				<NewsTable section_url={this.props.match.url}></NewsTable>
				<AddNewsForm section_url={this.props.match.url}></AddNewsForm>
			</div>
		)
	}
}

export default Section