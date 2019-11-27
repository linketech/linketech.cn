import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Banner.module.css'

export default class Banner extends Component {
	static propTypes = {
		title: PropTypes.string,
		children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
		imgUrl: PropTypes.string,
	}

	render() {
		return (
			<section
				// style={{ backgroundImage: `url(${this.props.imgUrl})` }}
				className={styles['banner']}
			>
				<img src={this.props.imgUrl} alt='' className={styles['img']} />
				<h1 className={styles['banner__title']}>{this.props.title}</h1>
				{this.props.children}
			</section>
		)
	}
}
