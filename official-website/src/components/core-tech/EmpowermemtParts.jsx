import React, { Component } from 'react'

import styles from './EmpowermemtParts.module.css'
import { empowerment } from './core-tech-config'
import ModuleTitle from '../common/module-title/ModuleTitle'

export default class EmpowermemtParts extends Component {
	render() {
		return (
			<section
				className={styles['empowerment-container']}
				// style={{
				// 	backgroundImage: `url(${empowerment.background})`,
				// }}
				>
				<div className={styles['main-container']}>
					<div className={styles['title-container']}>
						<ModuleTitle title={empowerment.title} isRight={true} isWhite={false}/>
					</div>
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
