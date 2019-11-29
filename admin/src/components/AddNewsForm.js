import React from 'react'
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates'
import { Spinner } from './spinner'
import { trackPromise } from 'react-promise-tracker'

import actions from '../redux/actions'

class AddNewsForm extends React.Component {
	constructor (props) {
		super(props)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleFocuseChange = this.handleFocuseChange.bind(this)
	}

	getNewsApi = async () => {
		const response = await fetch('/api/news')
		const body = await response.json()
		if (response.status !== 200) throw new Error(body.message)
		return body
	}

	handleInputChange (event) {
		this.props.input_change(event.target.value)
	}

	handleDateChange (date) {
		this.props.date_change(date)
	}

	handleFocuseChange (event) {
		this.props.focuse_change(event.focused)
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		this.props.reset_news()
		const data = new FormData()
		const project_name = (this.props.section_url.split('/'))[ 1 ]
		data.append('input', this.props.input)
		data.append('event_time', this.props.date)
		data.append('page_url', project_name)
		const res = await fetch('/news', { method: 'POST', body: data, mode: 'cors' })
		const body = await res.json()
		if (body.status === 200) {
			trackPromise(
				this.getNewsApi()
					.then(res => this.props.news_change(res.data))
					.then(() => alert('insert succeed'))
					.catch(err => console.error(err.stack))
			)
		}
	}

	render () {
		console.log(`props: { section_url: ${this.props.section_url}, date: ${this.props.date}, input: ${this.props.input}, focused: ${this.props.focused}}`)
		return (
			<form onSubmit={this.handleSubmit}>
				<label>URL:</label>
				<div className="url_text">
					<label>
						<input type="text" onChange={this.handleInputChange} placeholder="please paste an url here"></input>
					</label>
				</div>
				<SingleDatePicker
					date={this.props.date} // momentPropTypes.momentObj or null
					id="datepicker_id" // PropTypes.string.isRequired,
					onDateChange={this.handleDateChange} // PropTypes.func.isRequired
					focused={this.props.focused} // PropTypes.bool
					onFocusChange={this.handleFocuseChange} // PropTypes.func.isRequired
					isOutsideRange={() => false} // allow all days include past days
					showClearDate={true}
				/>
				<input type="submit" value="Submit"></input>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return { news: state.news, input: state.input, date: state.date, focused: state.focused }
}

export default connect(mapStateToProps, actions)(AddNewsForm)
