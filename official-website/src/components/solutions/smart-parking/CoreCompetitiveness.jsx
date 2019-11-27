import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CoreCompetitiveness.module.css'

// 智慧停车和精确定位都用得上，所以改写为传入 props 形式
export default class CoreCompetitiveness extends Component {
	static propTypes = {
		title: PropTypes.string,
		imgUrls: PropTypes.array,
		slogan: PropTypes.string,
	}

	render() {
		return (
			<section className={styles['root']}>
				<h3 className={styles['title']}>{this.props.title}</h3>
				<div className={styles['main-container']}>
					<div className={styles['flex-container']}>
						{this.props.imgUrls.map((imgUrl, index) => (
							<img
								src={imgUrl}
								alt={this.props.title}
								key={index}
								className={styles['competitiveness-icon']}
							/>
						))}
					</div>
					<div className={styles['slogan']}>{this.props.slogan}</div>
				</div>
			</section>
		)
	}
}
