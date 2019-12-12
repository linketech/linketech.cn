import React from 'react'
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { message } from 'antd'

import actions from './redux/actions'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import RegisterForm from './components/RegisterForm'

class App extends React.Component {
	componentDidMount () {
		this.getLoginStatus()
			.then((res) => {
				if (res.status === 200) {
					message.success(res.message)
					this.props.login_status_change(true, res.data._id, res.data.username)
				} else {
					message.warning(res.message)
					this.props.login_status_change(false, null, null)
				}
			})
			.catch(err => console.error(err.stack))
	}

	getRegisterBtnClick = async (isClicked) => {
		console.log(`isClicked: ${isClicked}`)
		if (isClicked) {
			this.props.history.push('/register')
		}
	}

	getLoginStatus = async () => {
		const response = await fetch('/api/user/info')
		const body = await response.json()
		return body
	}

	render () {
		console.log(`[App props]: ${JSON.stringify(this.props)}`)
		if (this.props.location.pathname === '/register') {
			return <RegisterForm />
		} else {
			return (
				<div className="App">
					{ !this.props.isLogin && <LoginForm btnClicked={this.getRegisterBtnClick.bind(this)} />}
					{ this.props.isLogin && <Home isLogin={this.props.isLogin} username={this.props.username} userId={this.props.userId} />}
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username }
}

export default withRouter(connect(mapStateToProps, actions)(App))
