import React from 'react'
import { withRouter } from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox, message, Layout } from 'antd'
import { connect } from 'react-redux'

import actions from '../redux/actions'

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (err) {
				console.error(err.stack)
				message.error(err.message)
			}
			this.onLogin(values)
				.then((res) => {
					if (res.status !== 200) {
						message.warning(res.message)
						return
					}
					message.success(res.message)
					this.props.statusChange(res.data.userId, res.data.username)
				})
				.then(() => this.props.history.push('/home'))
				.catch((error) => {
					console.error(error.stack)
					message.error(error.message)
				})
		})
	}

	onLogin = async (ele) => {
		const data = new FormData()
		data.append('username', ele.username)
		data.append('password', ele.password)
		const response = await fetch('/api/user/login', { method: 'POST', mode: 'cors', body: data })
		const body = response.json()
		return body
	}

	onRegisterClicked = async (e) => {
		e.preventDefault()
		this.props.btnClicked(true)
	}

	render () {
		const { getFieldDecorator } = this.props.form
		return (
			<Layout>
				<Form style={{ padding: "50px", borderStyle: "groove", borderWidth: "3px", backgroundColor: "white" }} onSubmit={this.handleSubmit} className="login-form">
					<Form.Item style={{ marginBottom: "30px" }}>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>,
						)}
					</Form.Item>
					<Form.Item style={{ marginBottom: "30px" }}>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox style={{ float: "left" }}>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
						<span style={{ float: "right" }}>Or <a href="/register" onClick={this.onRegisterClicked.bind(this)}>register now!</a></span>
					</Form.Item>
				</Form>
			</Layout>
		)
	}
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username, token: state.token }
}

export default withRouter(connect(mapStateToProps, actions)(LoginForm))
