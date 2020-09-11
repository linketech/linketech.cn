import React, { Component } from 'react'
import styles from './MerckuFeatureList.module.css'
import { merckuFeaturesList } from './router-config'

export default class MerckuFeatureList extends Component {
    render() {
        return (
            <section className={styles['root']} style={{
				backgroundImage: `url(${merckuFeaturesList.background})`,
			}}>
				<div className={styles['flex-container']}>
					<div className={styles['list-container']}>
						{merckuFeaturesList.features.map((feature, index) => (
							<div key={index} className={styles['list-item']}>
								<img
									src={feature.icon}
									alt=''
									className={styles['item-img']}
								/>
								<span>
									<div className={styles['item-text']}>{feature.name}</div>
									<div className={styles['item-sub-text']}>{feature.desc}</div>
								</span>
							</div>
						))}
					</div>
				</div>
			</section>
        )
    }
}
