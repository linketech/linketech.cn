import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './RouterFeature.module.css'

export default class RouterFeature extends PureComponent {
	static propTypes = {
		name: PropTypes.string,
		benefits: PropTypes.array,
		icon: PropTypes.string,
		background: PropTypes.string,
		align: PropTypes.bool,
	}

	render() {
		const isBackgroundImg = !/^#/.test(this.props.background)

		return (
			<section
				className={styles['feature-container']}
				style={{
					background: `${
						isBackgroundImg
							? `url(${this.props.background})`
							: this.props.background
					}`,
				}}
			>
				<div className={styles['flex-container']}>
					<div
						className={`${styles['text__container']} ${
							this.props.align ? styles['align-left'] : styles['align-right']
						}`}
					>
						<h3
							className={styles['text__title']}
							style={{ color: isBackgroundImg ? '#fff' : '#333' }}
						>
							{this.props.name}
						</h3>
						<div
							className={styles['text__bar']}
							style={{
								backgroundColor: isBackgroundImg ? '#d1dff6' : '#9f9f9f',
							}}
						/>
						{this.props.benefits.map((benefit, index) => (
							<p
								key={index}
								className={styles['text__paragraph']}
								style={{ color: isBackgroundImg ? '#eff1f5' : '#666' }}
							>
								{benefit}
							</p>
						))}
					</div>
					<img
						src={this.props.icon}
						alt={this.props.name}
						className={styles['feature-img']}
					/>
				</div>
			</section>
		)
	}
}
