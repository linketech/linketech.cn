import React from 'react'
import { withRouter, Link } from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox, message, Layout } from 'antd'
import { connect } from 'react-redux'

import actions from '../redux/actions'
import { wrapperFetch } from '../util/func-handler'

class NormalLoginForm extends React.Component {
	handleSubmit = async (e) => {
		e.preventDefault()
		const values = this.props.form.getFieldsValue()
		this.props.form.validateFields((err, values) => {
			if (err) {
				console.error(err.stack)
				message.error(err.message)
			}
		})
		await this.onLogin(values.username, values.password)
	}

	onLogin = async (username, password) => {
		const body = await wrapperFetch('/api/user/login', { method: 'POST' }, { username, password })
		if (body.status !== 200) {
			message.warning(body.message)
			return
		}
		message.success(body.message)
		this.props.statusChange(body.data.userId, body.data.username)
		this.props.history.push('/admin/home')
	}

	onRegisterClicked = (e) => {
		this.props.btnClicked()
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
						<span style={{ float: "right" }}>Or <Link to="/admin/register" onClick={this.onRegisterClicked}>register now!</Link></span>
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
