import React, { Component } from 'react'
import { Icon, Drawer } from 'antd'
import PropTypes from 'prop-types'

import styles from './VideoButton.module.css'
import './Drawer.css'

export default class VideoButton extends Component {
	static propTypes = {
		videoUrl: PropTypes.string,
		videoTitle: PropTypes.string,
	}

	state = {
		visible: false,
		innerHeight: 0,
		innerWidth: 0,
	}

	showDrawer = () => {
		this.setState({
			visible: true,
			innerHeight: window.innerHeight,
			innerWidth: window.innerWidth,
		})
	}

	onClose = () => {
		this.setState({
			visible: false,
		})
	}

	render() {
		return (
			<div className={styles['drawer-container']}>
				<div className={styles['video-button']} onClick={this.showDrawer}>
					<p>观看视频</p>
					<div>
						<Icon type='play-circle' style={{ fontSize: '36px' }} />
					</div>
				</div>
				<Drawer
					title={this.props.videoTitle}
					placement='bottom'
					closable={true}
					onClose={this.onClose}
					visible={this.state.visible}
					height={this.state.innerHeight}
				>
					<div className={styles['video-container']}>
						<video
							controls
							height={this.state.innerHeight - 100}
							width={this.state.innerWidth - 50}
							preload='metadata'
						>
							<source src={this.props.videoUrl} type='video/mp4' />
							Sorry, your browser doesn&#39;t support embedded videos.
						</video>
					</div>
				</Drawer>
			</div>
		)
	}
}
