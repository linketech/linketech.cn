import React, { Component } from 'react'

import styles from './SystemComposition.module.css'
import { systemComposition } from './locating-config'

export default class SystemComposition extends Component {
	render() {
		return (
			<section>
				<div
					style={{
						backgroundImage: `url(${systemComposition.imgUrl})`,
					}}
				>
					<h3 className={styles['title']}>{systemComposition.title}</h3>
				</div>
				<div className={styles['flex-container']}>
					{systemComposition.features.map((feature, index) => (
						<div key={index}>
							<img
								src={feature.icon}
								alt={feature.name}
								className={styles['img']}
							/>
						</div>
					))}
				</div>
			</section>
		)
	}
}
