import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './FooterItem.module.css'

export default class FooterItem extends Component {
	static propTypes = {
		name: PropTypes.string,
		href: PropTypes.string,
		submenu: PropTypes.array,
	}

	render() {
		return (
			<div>
				<Link
					to={this.props.href}
					className={`${styles['category-name']} ${styles['link']}`}
				>
					{this.props.name}
				</Link>
				<ul>
					{this.props.submenu.map((submenuItem) => (
						<li key={submenuItem.name} className={styles['submenu-item']}>
							<Link to={submenuItem.href} className={styles['link']}>
								{submenuItem.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
