import React from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button, DatePicker, message, Layout } from 'antd'

import actions from '../redux/actions'

class NormalAddForm extends React.Component {
	constructor (props) {
		super(props)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	getNewsApi = async () => {
		const response = await fetch('/api/news')
		const body = await response.json()
		if (response.status !== 200) {
			message.error(response.statusText)
			return
		}
		return body
	}

	handleDateChange (date, dateString) {
		this.props.date_change(date)
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		const input = this.props.form.getFieldValue('input')
		const data = new FormData()
		const project_name = (this.props.section_url.split('/'))[ 1 ]
		data.append('input', input)
		data.append('event_time', this.props.date)
		data.append('page_url', project_name)
		const res = await fetch('/api/news', { method: 'POST', body: data, mode: 'cors' })
		const body = await res.json()
		if (body.status !== 200) {
			message.error(body.message)
			return
		}
		this.getNewsApi()
			.then(res => this.props.news_change(res.data))
			.then(() => message.success('insert succeed'))
			.catch((err) => {
				console.error(err.stack)
				message.error(err.message)
			})
	}

	render () {
		console.debug(`[AddNewsForm props]: { section_url: ${this.props.section_url}, date: ${this.props.date}, input: ${this.props.input}, focused: ${this.props.focused}}`)
		const { getFieldDecorator } = this.props.form
		return (
			<Layout style={{ borderStyle: "groove", borderWidth: "3px", margin: "60px 0 50px 0", padding: "20px", backgroundColor: "white" }}>
				<Form labelCol={{ span: 3 }} wrapperCol={{ span: 8 }} onSubmit={this.handleSubmit}>
					<Form.Item label="SHIMO-URL">
						{getFieldDecorator('input', {
							rules: [{ required: true, message: 'Please input a shimo-news url' }],
						})(<Input placeholder="Please input a shimo-url here"/>)}
						<DatePicker onChange={this.handleDateChange} placeholder="Select date"/>
						<Button style={{ marginLeft: "20px" }} type="primary" htmlType="submit">
						Submit
						</Button>
					</Form.Item>
				</Form>
			</Layout>
		)
	}
}

const AddNewsForm = Form.create({ name: 'normal_login' })(NormalAddForm)

const mapStateToProps = state => {
	return { news: state.news, date: state.date, focused: state.focused }
}

export default connect(mapStateToProps, actions)(AddNewsForm)
