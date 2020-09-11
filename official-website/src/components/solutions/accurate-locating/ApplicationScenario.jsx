import React, { Component } from 'react'

import styles from './ApplicationScenario.module.css'
import { applicationScenario } from './locating-config'
import ModuleTitle from '../../common/module-title/ModuleTitle'

export default class ApplicationScenario extends Component {
	render() {
		return (
			<section className={styles['root']} style={{
				backgroundImage: `url(${applicationScenario.background})`,
			}}>
				<div className={styles['title-container']}>
					<ModuleTitle title={applicationScenario.title} isWhite={true} />
				</div>
				<div className={styles['flex-container']}>
					{applicationScenario.imgs.map((img, index) => (
						<div key={index} className={styles['flex-item']}>
							<img src={img.Url} alt={img.name} className={styles['img']} />
							<div className={styles['name']}>{img.name}</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}
