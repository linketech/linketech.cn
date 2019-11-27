import React, { Component } from 'react'

import styles from './ApplicationScenario.module.css'
import { applicationScenario } from './parking-config'

export default class ApplicationScenario extends Component {
	render() {
		return (
			<section>
				<h3 className={styles['title']}>{applicationScenario.title}</h3>
				<div className={styles['flex-container']}>
					{applicationScenario.imgs.map((img, index) => (
						<div key={index}>
							<img src={img.Url} alt={img.name} className={styles['img']} />
						</div>
					))}
				</div>
			</section>
		)
	}
}
