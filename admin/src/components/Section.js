import React from 'react'
import { Layout } from 'antd'
import NewsTable from './NewsTable'
import AddNewsForm from './AddNewsForm'

class Section extends React.Component {
	render () {
		return (
			<Layout>
				<NewsTable section_url={this.props.match.url}></NewsTable>
				<AddNewsForm section_url={this.props.match.url}></AddNewsForm>
			</Layout>
		)
	}
}

export default Section