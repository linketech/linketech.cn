import React from 'react'
import { withRouter } from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { connect } from 'react-redux'

import actions from '../redux/actions'
import RegisterForm from './RegisterForm'

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
					if (res.status === 200) {
						message.success(res.message)
						this.props.login_status_change(true, res.data._id, res.data.username)
					} else {
						message.warning(res.message)
					}
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
		console.log('click register button')
		this.props.btnClicked(true)
	}

	render () {
		const { getFieldDecorator } = this.props.form
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="Username"
						/>,
					)}
				</Form.Item>
				<Form.Item>
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
		)
	}
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username }
}

export default withRouter(connect(mapStateToProps, actions)(LoginForm))
