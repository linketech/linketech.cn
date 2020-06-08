import React, { Component } from 'react'

import styles from './TechnicalAdvantages.module.css'
import { advantages } from './core-tech-config' 
import ModuleTitle from '../common/module-title/ModuleTitle'

export default class TechnicalAdvantages extends Component {
	render() {
		return (
			<section className={styles['TA-container']}
				style={{
					backgroundImage: `url(${advantages.background})`,
				}}>
				<div className={styles['TA-title-container']}>
					<ModuleTitle title={advantages.title} isWhite={true} />
				</div>
				<div className={styles['flex-container']}>
					{advantages.items.map((item, index) => (
						<div key={index} className={styles['row-container']}>
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
