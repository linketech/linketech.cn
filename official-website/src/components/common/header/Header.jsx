/* eslint-disable no-confusing-arrow */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Icon, Popover, Menu } from 'antd'

import NavItem from './NavItem.jsx'

import navConfig from '../nav-config'
import infoConfig from '../info-config'
import styles from './Header.module.css'
import logo from './logo.png'

const { SubMenu } = Menu

export default class Header extends Component {
	state = {
		visible: false,
	}

	hide = () => {
		this.setState({
			visible: false,
		})
	}

	handleVisibleChange = (visible) => {
		this.setState({ visible })
	}

	render() {
		const navList = (
			<ul style={{ position: 'absolute', top: 0, marginLeft: 100, zIndex: 1 }}>
				{navConfig.map((navItem) => (
					<NavItem
						key={navItem.name}
						name={navItem.name}
						href={navItem.href}
						submenu={navItem.submenu}
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
									<Menu.Item key={subItem.name}>
										<Link to={subItem.href}>{subItem.name}</Link>
									</Menu.Item>
								))}
							</SubMenu>
						) : (
							<Menu.Item key={navItem.name}>
								<Link to={navItem.href}>{navItem.name}</Link>
							</Menu.Item>
						),
					// eslint-disable-next-line function-paren-newline
				)}
			</Menu>
		)

		return (
			<header>
				<div className={styles['header-container']}>
					<Row>
						<Col
							xs={24}
							sm={24}
							md={24}
							lg={9}
							className={styles['logo-container']}
						>
							<Link to={navConfig[0].href} className={styles['logo-link']}>
								<img src={logo} alt='领翌技术' />
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
							<Icon type='menu' className={styles['nav-phone-icon']} />
						</Popover>
					</Row>
				</div>
			</header>
		)
	}
}
