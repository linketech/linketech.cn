import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class AddNewsForm extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.props.input_change(event.target.value)
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const data = new FormData()
		const project_name = this.props.section_url.split('/')[1]
		data.append('input', this.props.input)
		data.append('page_url', project_name)
		const res = await fetch('/api/news', {
			method: 'POST',
			body: data,
			mode: 'cors',
		})
		const body = await res.json()
		if (body.status === 200) {
			const response = await fetch('/api/news')
			const body = await response.json()
			if (response.status !== 200) throw new Error(body.message)
			this.props.news_change(body.data)
			alert('Insert succeed')
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>URL:</label>
				<label>
					<input
						type='text'
						onChange={this.handleChange}
						placeholder='please paste an url here'
					></input>
				</label>
				<input type='submit' value='Submit'></input>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return { news: state.news, input: state.input }
}

export default connect(mapStateToProps, actions)(AddNewsForm)
