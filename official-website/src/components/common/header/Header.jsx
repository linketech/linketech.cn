/* eslint-disable no-confusing-arrow */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Icon, Popover, Menu } from 'antd'

import NavItem from './NavItem.jsx'

import navConfig from '../nav-config'
import infoConfig from '../info-config'
import styles from './Header.module.css'
import logo from './logo.png'
import logo_white from './logo_white.png'

const { SubMenu } = Menu

export default class Header extends Component {
	state = {
		visible: false,
		isHover: false
	}

	hide = () => {
		this.setState({
			visible: false,
			isHover: false,
		})
	}

	handleVisibleChange = (visible) => {
		this.setState({ visible })
	}

	mouseEnter = () => {
		this.setState({ isHover:true })
	}

	mouseLeave = () => {
		this.setState({ isHover:false })
	}

	render() {
		const navList = (
			<ul style={{ position: 'absolute', top: 0, marginLeft: 100, zIndex: 1}}>
				{navConfig.map((navItem) => (
					<NavItem
						key={navItem.name}
						name={navItem.name}
						href={navItem.href}
						submenu={navItem.submenu}
						isHover={this.state.isHover}
					/>
				))}
			</ul>
		)

		const navListPhone = (
			<Menu mode='inline'>
				{navConfig.map(
					(navItem) =>
						// eslint-disable-next-line implicit-arrow-linebreak
						navItem.submenu.length ? (
							<SubMenu key={navItem.name} title={navItem.name}>
								{navItem.submenu.map((subItem) => (
									<Menu.Item key={subItem.name} onClick={this.hide}>
										<Link to={subItem.href}>{subItem.name}</Link>
									</Menu.Item>
								))}
							</SubMenu>
						) : (
							<Menu.Item key={navItem.name} onClick={this.hide}>
								<Link to={navItem.href}>{navItem.name}</Link>
							</Menu.Item>
						),
					// eslint-disable-next-line function-paren-newline
				)}
			</Menu>
		)
		return (
			<header className={styles['header-container']}
			onMouseEnter={this.mouseEnter}
			onMouseLeave={this.mouseLeave}>
				<div  className={styles['navigationbar-container']}>
					<Row>
						<Col
							xs={24}
							sm={24}
							md={24}
							lg={9}
							className={styles['logo-container']}
						>
							<Link to={navConfig[0].href} className={styles['logo-link']}>
								<img src={this.state.isHover ? logo : logo_white} alt='领翌技术' />
								<span className={styles['slogan']}>{infoConfig.slogan}</span>
							</Link>
						</Col>

						<Col xs={0} sm={0} md={0} lg={15}>
							<nav>{navList}</nav>
						</Col>

						<Popover
							placement='bottomRight'
							content={navListPhone}
							trigger='click'
							visible={this.state.visible}
							onVisibleChange={this.handleVisibleChange}
						>
							<Icon type='menu' className={styles['nav-phone-icon']} style={{color:this.state.isHover?'black':'white'}}/>
						</Popover>
					</Row>
				</div>
			</header>
		)
	}
}
