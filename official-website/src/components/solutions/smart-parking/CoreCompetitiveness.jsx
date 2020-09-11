import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CoreCompetitiveness.module.css'
import ModuleTitle from '../../common/module-title/ModuleTitle'

// 智慧停车和精确定位都用得上，所以改写为传入 props 形式
export default class CoreCompetitiveness extends Component {
	static propTypes = {
		title: PropTypes.string,
		imgUrls: PropTypes.array,
		slogan: PropTypes.string,
		schematicUrl: PropTypes.string,
		summary: PropTypes.string,
	}

	render() {
		return (
			<section className={styles['root']}>
				<div className={styles['flex-container']}>
					<div className={styles['schematic-container']}>
						<img src={this.props.schematicUrl} alt='' className={styles['schematic-img']} />
					</div>
					<div className={styles['summary-container']}>
						<div className={styles['summary']}>{this.props.summary}</div>
						<div className={styles['title-container']}>
							<ModuleTitle title={this.props.title} isRight={true}/>
						</div>
						<div>
							<div className={styles['summary-img-container']}>
								{this.props.imgUrls.map((imgUrl, index) => (
									<img
										src={imgUrl}
										alt={this.props.title}
										key={index}
										className={styles['competitiveness-icon']}
									/>
								))}
							</div>
						</div>
						<div className={styles['slogan']}>{this.props.slogan}</div>
					</div>
				</div>
			</section>
		)
	}
}
