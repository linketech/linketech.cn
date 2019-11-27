import React, { Component } from 'react'

import styles from './SystemComposition.module.css'
import { systemComposition } from './parking-config'

export default class SystemComposition extends Component {
	render() {
		return (
			<section className={styles['root']}>
				<h3 className={styles['title']}>{systemComposition.title}</h3>
				<div className={styles['flex-container']}>
					<div className={styles['list-container']}>
						{systemComposition.features.map((feature, index) => (
							<div key={index} className={styles['list-item']}>
								<img
									src={feature.icon}
									alt={systemComposition.title}
									className={styles['item-img']}
								/>
								<span className={styles['item-text']}>{feature.name}</span>
							</div>
						))}
					</div>
					<div className={styles['adjacent-img']}>
						<img
							src={systemComposition.imgUrl}
							alt={systemComposition.title}
							className={styles['img']}
						/>
					</div>
				</div>
			</section>
		)
	}
}
