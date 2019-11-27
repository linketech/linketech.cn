import React, { Component } from 'react'

import styles from './TechnicalAdvantages.module.css'
import { advantages } from './core-tech-config'

export default class TechnicalAdvantages extends Component {
	render() {
		return (
			<section className={styles['TA-container']}>
				<h3 className={styles['TA-title']}>{advantages.title}</h3>
				<div className={styles['flex-container']}>
					{advantages.items.map((item, index) => (
						<div key={index}>
							<img
								src={item.imgUrl}
								alt='技术优势'
								className={styles['feature-icon']}
							/>
							<div className={styles['features']}>
								{item.features.map((feature, jndex) => (
									<p key={jndex} className={styles['feature']}>
										{feature}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}
