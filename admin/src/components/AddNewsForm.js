import React from 'react'
import { connect } from 'react-redux'
import { Input, Form, Button, DatePicker, message, Layout } from 'antd'

import actions from '../redux/actions'
import { wrapperFetch } from '../util/func-handler'

class NormalAddForm extends React.Component {
	constructor (props) {
		super(props)
		this.handleDateChange = this.handleDateChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = { committing: false }
	}

	getNewsApi = async () => {
		const get_body = await wrapperFetch('/api/news')
		if (get_body.status !== 200) {
			message.warning(get_body.message)
			return
		}
		this.props.news_change(get_body.data)
	}

	handleDateChange (date, dateString) {
		this.props.date_change(date)
	}

	handleSubmit = async (event) => {
		event.preventDefault()
		this.setState({ committing: true })
		const input = this.props.form.getFieldValue('input')
		const project_name = (this.props.section_url.split('/admin/'))[ 1 ]
		const post_body = await wrapperFetch('/api/news', { method: 'POST' }, {
			input,
			event_time: this.props.date,
			page_url: project_name
		})
		if (post_body.status !== 200) {
			message.warning(post_body.message)
			return
		}
		message.success('insert succeed')
		this.setState({ committing: false })
		await this.getNewsApi()
		// wrapperFetch('/api/news', { method: 'POST' }, {
		// 	input,
		// 	event_time: this.props.date,
		// 	page_url: project_name
		// })
		// 	.then((post_body) => {
		// 		if (post_body.status !== 200) {
		// 			message.warning(post_body.message)
		// 			return
		// 		}
		// 	})
		// 	.then(() => this.getNewsApi())
		// 	.then((get_body) => {
		// 		if (get_body.status !== 200) {
		// 			message.warning(get_body.message)
		// 			return
		// 		}
		// 		this.props.news_change(get_body.data)
		// 	})
		// 	.then(() => {
		// 		message.success('insert succeed')
		// 		this.setState({ committing: false })
		// 	})
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
						<Button style={{ marginLeft: "20px" }} type="primary" htmlType="submit" disabled={this.state.committing}>
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
