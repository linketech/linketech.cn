import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackTop } from 'antd'

import styles from './SideIcon.module.css'

export default class SideIcon extends Component {
	static propTypes = {
		icon: PropTypes.object,
	}

	state = {
		detailVisibility: false,
	}

	showDetail = () => {
		this.setState({ detailVisibility: true })
	}

	hideDetail = () => {
		this.setState({ detailVisibility: false })
	}

	regex = /^[0-9]/

	DetailContainer = () => (
		<div className={styles['detail-info']}>
			<span className={styles['detail-text']}>
				{/* 判断是否为路径字符串 */}
				{this.regex.test(this.props.icon.detail) ? (
					this.props.icon.detail
				) : (
					// 二维码详情
					<img
						src={this.props.icon.detail}
						alt='https://linketech.cn'
						className={styles['detail-qrcode']}
					/>
				)}
			</span>
		</div>
	)

	IconContainer = (props) => {
		// 判断一下是否是友情链接
		if (this.props.icon.name === '友情链接') {
			return (
				// 不能写成配置，不然会变成相对路径
				<a href='//www.dbjtech.com' rel='noopener noreferrer' target='_blank'>
					<div
						className={`${styles['icon-container']} ${props.className}`}
						title={this.props.icon.name}
					>
						<img src={this.props.icon.imgUrl} alt={this.props.icon.name} />
					</div>
				</a>
			)
		}
		return (
			<div
				className={`${styles['icon-container']} ${props.className}`}
				title={this.props.icon.name}
			>
				<img src={this.props.icon.imgUrl} alt={this.props.icon.name} />
			</div>
		)
	}

	render() {
		return (
			<div onMouseOver={this.showDetail} onMouseLeave={this.hideDetail}>
				{/* 详情信息框，是否生成取决于鼠标是否移动到图标上，故无法用 CSS 控制 */}
				{this.props.icon.detail && this.state.detailVisibility && (
					<this.DetailContainer />
				)}

				{/* icon 框 */}
				{this.props.icon.name === '回到顶部' ? (
					<BackTop id={styles['gotop']}>
						<this.IconContainer />
					</BackTop>
				) : (
					<this.IconContainer className={styles['other-icon']} />
				)}
			</div>
		)
	}
}
