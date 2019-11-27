import React, { Component } from 'react'

import styles from './EmpowermemtParts.module.css'
import { empowerment } from './core-tech-config'

export default class EmpowermemtParts extends Component {
	render() {
		return (
			<section
				className={styles['empowerment-container']}
				style={{
					backgroundImage: `url(${empowerment.background})`,
				}}>
				<div className={styles['main-container']}>
					<h3 className={styles['empowerment-title']}>{empowerment.title}</h3>
					<div className={styles['empowerment-parts']}>
						{empowerment.parts.map((part, index) => (
							<div key={index}>
								<img
									src={part.imgUrl}
									alt={part.name}
									className={styles['part-icon']}
								/>
								<p className={styles['part-name']}>{part.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		)
	}
}
