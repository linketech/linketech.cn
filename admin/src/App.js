import React from 'react'
import { withRouter, Route } from "react-router-dom"
import { connect } from 'react-redux'
import { message, Layout } from 'antd'

import actions from './redux/actions'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import { wrapperFetch } from './util/func-handler'

class App extends React.Component {
	componentDidMount () {
		this.getLoginStatus()
	}

	onStatusChange = (userId, username) => {
		this.props.login_status_change(true, userId, username)
	}

	getRegisterBtnClick = () => {
		this.props.history.push('/admin/register')
	}

	getLoginStatus = async () => {
		const body = await wrapperFetch('/api/user/status')
		if (body.status === 200) {
			message.success(body.message)
			this.props.login_status_change(true, body.data._id, body.data.username)
		} else {
			message.warning(body.message)
			this.props.login_status_change(false, null, null)
		}
	}

	render () {
		console.debug(`[App props]: ${JSON.stringify(this.props)}`)
		return this.props.location.pathname === '/admin/register' ? <RegisterForm /> : <Layout style={ { height: "-webkit-fill-available" }}>
			<Route path='/admin/register' component={LoginForm} />
			{ !this.props.isLogin && <LoginForm btnClicked={this.getRegisterBtnClick} statusChange={this.onStatusChange.bind(this)} />}
			{ this.props.isLogin && <Home isLogin={this.props.isLogin} username={this.props.username} userId={this.props.userId} />}
		</Layout>
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username }
}

export default withRouter(connect(mapStateToProps, actions)(App))
