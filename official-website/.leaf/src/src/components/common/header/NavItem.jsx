import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NavItem.module.css'

export default class NavItem extends Component {
	static propTypes = {
		name: PropTypes.string,
		href: PropTypes.string,
		submenu: PropTypes.array, 
	}

	constructor(props) {
		super(props)
		this.state = { isShowSubmenu: false}
	}

	showSubmenu = () => {
		this.setState({ isShowSubmenu: true })
	}

	hideSubmenu = () => {
		this.setState({ isShowSubmenu: false })
	}

	render() {
		return (
			<li
				className={styles['nav-item__container']}
				// 不用 onMouseOver 是因为鼠标反复移动反复触发
				onMouseEnter={this.showSubmenu}
				onMouseLeave={this.hideSubmenu}
			>
				<Link to={this.props.href} className= {styles[this.props.isHover?'nav-item__item-hover':'nav-item__item']}>
					{this.props.name}  
				</Link> 
				<div className={styles['nav-item__submenu']}>
					<ul>
						{this.state.isShowSubmenu &&
							this.props.submenu.map((submenuItem) => (
								<li className={styles['submenu__item']} key={submenuItem.name}>
									<Link to={submenuItem.href}>{submenuItem.name}</Link> 
								</li>
							))}
					</ul>
				</div>
			</li>
		)
	}
}
