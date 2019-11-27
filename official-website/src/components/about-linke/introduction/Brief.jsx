import React, { PureComponent } from 'react'

import styles from './Brief.module.css'
import { brief } from '../about-config'

export default class Brief extends PureComponent {
	render() {
		return (
			<article className={styles['brief-container']}>
				<h3 className={styles['brief-title']}>{brief.title}</h3>
				<div>
					{brief.paragraphs.map((paragraph, index) => (
						<p key={index} className={styles['brief-paragraph']}>
							{paragraph}
						</p>
					))}
				</div>
			</article>
		)
	}
}
