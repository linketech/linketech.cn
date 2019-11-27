import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NavItem.module.css'

export default class NavItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSelected: false,
			isLocked: props.locked,
		}
	}

	static propTypes = {
		dark: PropTypes.string,
		light: PropTypes.string,
		name: PropTypes.string,
		href: PropTypes.string,
		locked: PropTypes.bool,
	}

	selectToSwitch = () => {
		if (!this.state.isLocked) {
			this.setState({ isSelected: true })
		}
	}

	backToDefault = () => {
		if (!this.state.isLocked) {
			this.setState({ isSelected: false })
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		// 前后状态不变则无事发生
		if (nextProps.locked === prevState.isLocked) {
			return null
		}

		// 若前后有变化再进行判断
		if (nextProps.locked) {
			// 要设置 isSelected 否则由于锁住了，路由改变时背景不消失
			return {
				isLocked: true,
				isSelected: false,
			}
		}
		return { isLocked: false }
	}

	render() {
		let containerClass = `${styles['item-container']}`
		let nameClass = `${styles['item__name']}`
		let imgUrl = this.props.dark

		if (this.state.isLocked || this.state.isSelected) {
			containerClass += ` ${styles['selected']}`
			nameClass += ` ${styles['light-text']}`
			imgUrl = this.props.light
		}

		return (
			<Link to={this.props.href}>
				<div
					className={containerClass}
					// 不用 onMouseOver 是因为鼠标反复移动反复触发
					onMouseEnter={this.selectToSwitch}
					onMouseLeave={this.backToDefault}>
					<div className={styles['item__icon']}>
						<img src={imgUrl} alt={this.props.name} />
					</div>
					<p className={nameClass}>{this.props.name}</p>
				</div>
			</Link>
		)
	}
}
