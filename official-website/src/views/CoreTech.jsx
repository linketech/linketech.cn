import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
import TechnicalAdvantages from '../components/core-tech/TechnicalAdvantages.jsx'
import EmpowermemtParts from '../components/core-tech/EmpowermemtParts.jsx'

import styles from './CoreTech.module.css'
import { banner } from '../components/core-tech/core-tech-config'

export default class CoreTech extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl}>
					<div className={styles['banner__subtitle_container']}>
						<h2 className={styles['banner__subtitle']}>{banner.subtitle}</h2>
					</div>
				</Banner>
				<EmpowermemtParts />
				<TechnicalAdvantages />
			</main>
		)
	}
}
