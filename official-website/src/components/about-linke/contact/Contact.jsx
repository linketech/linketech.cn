import React, { Component } from 'react'
import { Map, Marker, InfoWindow } from 'react-amap'

import styles from './Contact.module.css'
import { contact, amap } from '../about-config'

export default class Contact extends Component {
	// 信息窗体的切换无法设置在配置中，故设置组件状态和事件进行控制
	state = { infoWindowVisible: false }

	// 点击 marker 以切换消息窗口的可见性
	markerEvents = {
		click: () => {
			this.setState({
				infoWindowVisible: !this.state.infoWindowVisible,
			})
		},
	}

	// 避免通过 × 关闭后组件的状态没有同步
	infoWindowEvents = {
		close: () => {
			this.setState({
				infoWindowVisible: false,
			})
		},
	}

	render() {
		return (
			<section>
				<div className={styles['contact-container']}>
					<div className={styles['flex-container']}>
						{contact.info.map((item, index) => (
							<div key={index} className={styles['flex-element']}>
								<img src={item.icon} alt={item.name} />
								<p className={styles['item__name']}>{item.name}</p>
								{/* 别动，下面 amap 也是这种结构 */}
								{item.detail.map((jtem, jndex) => (
									<p className={styles['item__detail']} key={jndex}>
										{jtem}
									</p>
								))}
								{item.comment ? (
									<p className={styles['item__comment']}>{item.comment}</p>
								) : null}
							</div>
						))}
					</div>

					{/* 以下详情参考 react-amap */}
					<div className={styles['map-container']}>
						<Map
							amapkey={amap.amapkey}
							version={amap.version}
							plugins={amap.plugins}
							center={amap.mapCenter}
							zoom={amap.zoom}>
							<Marker position={amap.mapCenter} events={this.markerEvents} />

							<InfoWindow
								size={amap.infoWindow.size}
								position={amap.infoWindow.position}
								visible={this.state.infoWindowVisible}
								events={this.infoWindowEvents}
								className={styles['info-window']}>
								<h3 className={styles['map-title']}>
									{contact.info[0].detail}
								</h3>
								<p className={styles['map-address']}>
									{contact.info[1].detail.map((text, index) => (
										<span key={index}>{text}</span>
									))}
								</p>
							</InfoWindow>
						</Map>
					</div>
				</div>
			</section>
		)
	}
}
