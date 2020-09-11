import React, { Component } from 'react'
import styles from './UUFeatureList.module.css'
import { uuBoxFeaturesList } from './uu-config'

export default class UUFeatureList extends Component {
    render() {
        return (
            <section className={styles['root']} style={{
				backgroundImage: `url(${uuBoxFeaturesList.background})`,
			}}>
				<div className={styles['flex-container']}>
					<div className={styles['list-container']}>
						{uuBoxFeaturesList.features.map((feature, index) => (
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
