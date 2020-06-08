import React, { Component } from 'react'

import styles from './About.module.css'
import { about } from './home-config'

export default class About extends Component {
	render() {
		return (
			<section style={{ backgroundImage: `url(${about.imgUrl})` }}>
				<div className={styles['container']}>
					<h3 className={styles['about-big-title']}>
						{about.bigTitle}
						{/* 都是行内元素 */}
						<span className={styles['about-small-title']}>
							{about.smallTitle}
						</span>
					</h3>

					{/* 一行对应一句段，便于布局 */}
					{about.paragraphs.map((paragraph, index) => (
						<p key={index} className={styles['about-paragraph']}>
							{paragraph}
						</p>
					))}
				</div>
			</section>
		)
	}
}
