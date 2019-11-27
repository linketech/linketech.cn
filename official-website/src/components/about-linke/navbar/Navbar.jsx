import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

import NavItem from './NavItem.jsx'

import styles from './Navbar.module.css'
import { navItems } from '../about-config'

export default class Navbar extends Component {
	static propTypes = {
		url: PropTypes.string,
	}

	render() {
		return (
			<nav className={styles['navbar']}>
				<Row className={styles['items-container']}>
					{navItems.map((item, index) => (
						<Col span={6} key={index}>
							<NavItem
								dark={item.dark}
								light={item.light}
								name={item.name}
								href={item.href}
								locked={this.props.url === item.href}
							/>
						</Col>
					))}
				</Row>
			</nav>
		)
	}
}
