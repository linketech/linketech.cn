import React from 'react'
import { Route, Switch, Link, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { Layout, Menu, Dropdown, Icon, Typography, message } from 'antd'

import { wrapperPromiseFunc, wrapperFetch } from '../util/func-handler'

import '../App.css'
import actions from '../redux/actions'
import logo from '../logo3.png'
import Section from './Section'
import RegisterForm from './RegisterForm'

const { Title } = Typography
const wrapperFetch = null
class Home extends React.Component {
	constructor (props) {
		super(props)
		this.state = { collapsed: false }
	}

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

	componentDidMount () {
		wrapperPromiseFunc(this.getLoginStatus)
			.then((res) => {
				if (res.status === 200) {
					message.success(res.message)
				} else {
					message.warning(res.message)
					this.props.login_status_change(false, null, null)
					this.props.history.push('/login')
				}
			})
	}

	getLoginStatus = async () => {
		const body = await wrapperFetch('/api/user/status')
		return body
	}

	onLogOut = async () => {
		const body = await wrapperFetch(`/api/user/logout`)
		return body
	}

	onDropDownMenuClicked = (e) => {
		if (e.key === 'logout') {
			wrapperPromiseFunc(this.onLogOut)
				.then((res) => {
					if (res.status === 200) {
						message.success(res.message)
						this.props.login_status_change(false, null, null)
						this.props.history.push('/')
					} else {
						message.warning(res.message)
					}
				})
		}
	}

	render () {
		console.debug(`[Home props]: ${JSON.stringify(this.props)}`)
		const menu = (
			<Menu onClick={this.onDropDownMenuClicked}>
				<Menu.Item key="info">
					Personal Info
				</Menu.Item>
				<Menu.Item key="logout">
					<Icon type="logout" />Logout
				</Menu.Item>
			</Menu>
		)
		return (
			<Layout>
				<Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" style={{ margin: "40px 30px" }}>
						<img src={logo} width="130px" height="40px" alt="logo" />
					</div>
					<Menu theme="dark" mode="inline">
						<Menu.Item className="navigation-style" key="1" title="home">
							<Icon type="home" className="icon-style"/>
							<span><Link className="link-style" to="/home">Home</Link></span>
						</Menu.Item>
						<Menu.Item className="navigation-style" key="2" title="linke">
							<Icon type="table" className="icon-style"/>
							<span><Link className="link-style" to="/linke">Linke</Link></span>
						</Menu.Item>
						<Menu.Item key="3" title="dbj">
							<Icon type="table" className="icon-style"/>
							<span><Link className="link-style" to="/dbj">DBJ</Link></span>
						</Menu.Item>
					</Menu>
				</Layout.Sider>
				<Layout>
					<Layout.Header style={{ background: "#fff", padding: "10px 20px", marginBottom: "10px", height: "80px", textAlign: "center" }}>
						<Icon
							className="trigger"
							style={{ float: "left" }}
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
						<Dropdown.Button style={{ float: "right", fontSize: "20px" }} overlay={menu} icon={<Icon type="user" />}>
							{this.props.username}
						</Dropdown.Button>
					</Layout.Header>
					<Layout.Content
						style={{
							margin: '16px 16px',
							minHeight: 280,
						}}
					>
						<Switch>
							<Route exact path="/home" component={MainPage} />
							<Route path="/register" component={RegisterForm} />
							<Route path="/linke" component={Section} />
							<Route path="/dbj" component={Section} />
						</Switch>
					</Layout.Content>
					<Layout.Footer style={{ textAlign: 'center' }}>
						Linke Technology ©2020 Created by Lee
					</Layout.Footer>
				</Layout>
			</Layout>
		)
	}
}

class MainPage extends React.Component {
	render () {
		return (
			<Layout style={{ borderStyle: "groove", borderWidth: "3px", marginBottom: "100px", marginTop: "20px", backgroundColor: "white" }}>
				<Title style={{ textAlign: "center" }} level={2}>Home page</Title>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin, userId: state.userId, username: state.username }
}

export default withRouter(connect(mapStateToProps, actions)(Home))