import React, { Component } from 'react'
  
import styles from './SystemComposition.module.css'
import { systemComposition } from './parking-config'
import ModuleTitle from '../../common/module-title/ModuleTitle'

export default class SystemComposition extends Component {
	render() {
		return (
			<section className={styles['root']} style={{
				backgroundImage: `url(${systemComposition.backgroundImage})`,
			}}>

				<div className={styles['title-container']}>
					<ModuleTitle title={systemComposition.title} isWhite={true} />
				</div>

				<div className={styles['flex-container']}>
					<div className={styles['list-container']}>
						{systemComposition.features.map((feature, index) => (
							<div key={index} className={styles['list-item']}>
								<img
									src={feature.icon}
									alt={systemComposition.title}
									className={styles['item-img']}
								/>
								<span>
									<div className={styles['item-text']}>{feature.name}</div>
									<div className={styles['item-sub-text']}>{feature.subname}</div>
								</span>
								{/* <span className={styles['item-text']}>{feature.name}</span> */}
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}
}
