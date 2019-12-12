import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { Menu, Dropdown, Icon, message } from 'antd'


import '../App.css'
import actions from '../redux/actions'
import logo from '../logo2.png'
import Section from './Section'
import Navigation from './Navigation'
import RegisterForm from './RegisterForm'

class Home extends React.Component {
	componentDidMount () {
		this.getLoginStatus()
			.then((res) => {
				if (res.status === 401) {
					message.warning(res.message)
					this.props.login_status_change(false, null, null)
					this.props.history.push('/login')
				}
			})
			.catch((err) => {
				console.error(err.stack)
				message.error(err.message)
			})
	}

	getLoginStatus = async () => {
		const response = await fetch('/api/user/info')
		const body = response.json()
		return body
	}

	onLogOut = async () => {
		const response = await fetch(`/api/user/logout?userId=${this.props.userId}`)
		const body = response.json()
		return body
	}

	handleMenuClick = async (e) => {
		console.log(e)
		if (e.key === '1') {
			this.onLogOut()
				.then((res) => {
					if (res.status === 200) {
						message.success(res.message)
						this.props.login_status_change(false, null, null)
						this.props.history.push('/')
					}
				})
				.catch((err) => {
					console.error(err.stack)
					message.error(err.message)
				})
		}
	}

	render () {
		console.log(`[Home props]: ${JSON.stringify(this.props)}`)
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="0">
					Personal Info
				</Menu.Item>
				<Menu.Item key="1">
					Logout
				</Menu.Item>
			</Menu>
		)
		return (
			<div className="App">
				<div className="header">
					<img src={logo} style={{ height: "4ex", float: "left", padding: "30px 0 0 10px" }} className="App-logo" alt="logo" />
					<h1>Linke Technology</h1>
					<div className="dropdown_style">
						<Dropdown.Button overlay={menu} icon={<Icon type="user" />}>
							{this.props.username}
						</Dropdown.Button>
					</div>

				</div>
				<Navigation></Navigation>
				<Switch>
					<Route exact path="/home" component={MainPage} />
					<Route path="/register" component={RegisterForm} />
					<Route path="/linke" component={Section} />
					<Route path="/dbj" component={Section} />
				</Switch>
			</div>
		)
	}
}

class MainPage extends React.Component {
	render () {
		return (
			<div>
				<h1>Home</h1>
				<p className="left">This is home page</p>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username }
}

export default withRouter(connect(mapStateToProps, actions)(Home))