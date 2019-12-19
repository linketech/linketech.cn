import React from 'react'
import { withRouter } from "react-router-dom"
import { Form, Input, Select, Button, message, PageHeader, Layout } from 'antd'

const { Option } = Select

class RegistrationForm extends React.Component {
	state = {
		confirmDirty: false,
		usernameDirty: false
	}

	onRegister = async (ele) => {
		const data = new FormData()
		data.append('username', ele.username)
		data.append('password', ele.password)
		data.append('phone', ele.phone)
		const response = await fetch('/api/user/register', { method: 'POST', mode: 'cors', body: data })
		const body = response.json()
		return body
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (err) {
				message.error('frontend error')
				return
			}
			this.onRegister(values)
				.then((res) => {
					if (res.status === 200) {
						message.success(res.message)
					} else {
						message.warning(res.message)
					}
				})
				.then(() => this.props.history.push('/login'))
				.catch((error) => {
					console.error(error.stack)
					message.error(error.message)
				})
		})
	}

	handleConfirmBlur = e => {
		const { value } = e.target
		this.setState({ confirmDirty: this.state.confirmDirty || !!value })
	}

	handleUsernameBlur = e => {
		const { value } = e.target
		this.setState({ usernameDirty: this.state.usernameDirty || !!value })
	}

	checkUsername = (rule, value, callback) => {
		const { form } = this.props
		const data = new FormData()
		data.append('username', form.getFieldValue('username'))
		fetch('/api/user/check', { method: 'POST', mode: 'cors', body: data })
			.then(res => res.json())
			.then((body) => {
				if (value && (body.status !== 200)) {
					callback(body.message)
				} else {
					callback()
				}
			})
	}

	compareToFirstPassword = (rule, value, callback) => {
		const { form } = this.props
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!')
		} else {
			callback()
		}
	}

	validateToNextPassword = (rule, value, callback) => {
		const { form } = this.props
		if (value && this.state.confirmDirty) {
			form.validateFields(['confirm'], { force: true })
		}
		callback()
	}

	render () {
		const { getFieldDecorator } = this.props.form
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 },
			},
		}
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		}
		const prefixSelector = getFieldDecorator('prefix', {
			initialValue: '86',
		})(
			<Select style={{ width: 70, height: 30 }}>
				<Option value="86">+86</Option>
			</Select>
		)

		return (
			<Layout>
				<PageHeader
					style={{
						border: '1px solid rgb(235, 237, 240)',
					}}
					onBack={() => this.props.history.push('/login')}
					title="Register Page"
				/>
				<Form {...formItemLayout} style={{ margin: "200px 30px 300px 30px", padding: "60px", borderStyle: "groove", borderWidth: "3px", backgroundColor: "white" }} onSubmit={this.handleSubmit}>
					<Form.Item label="Username">
						{getFieldDecorator('username', {
							rules: [
								{
									required: true,
									message: 'Please input your username!',
								},
								{
									validator: this.checkUsername,
								},
							],
						})(<Input type="text" onBlur={this.handleUsernameBlur} />)}
					</Form.Item>
					<Form.Item label="Password" hasFeedback>
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: 'Please input your password!',
								},
								{
									validator: this.validateToNextPassword,
								},
							],
						})(<Input.Password />)}
					</Form.Item>
					<Form.Item label="Confirm Password" hasFeedback>
						{getFieldDecorator('confirm', {
							rules: [
								{
									required: true,
									message: 'Please confirm your password!',
								},
								{
									validator: this.compareToFirstPassword,
								},
							],
						})(<Input.Password onBlur={this.handleConfirmBlur} />)}
					</Form.Item>
					<Form.Item label="Phone Number">
						{getFieldDecorator('phone', {
							rules: [{ required: true, message: 'Please input your phone number!' }],
						})(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
					</Form.Item>
					<Form.Item {...tailFormItemLayout}>
						<Button type="primary" htmlType="submit">
						Register
						</Button>
					</Form.Item>
				</Form>
			</Layout>
		)
	}
}

const RegisterForm = Form.create({ name: 'register' })(RegistrationForm)

export default withRouter(RegisterForm)
