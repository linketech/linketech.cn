import React, { Component } from 'react'
import { Icon } from 'antd'

import styles from './Jobs.module.css'
import { jobs, title } from './jobs-config'
import info from '../../common/info-config'

export default class Jobs extends Component {
	state = { currentJob: -1 }

	/**
	 * 通过高阶函数传入点击的信息
	 *
	 * @memberof Jobs
	 */
	switchVisible = (i) => () => {
		if (this.state.currentJob !== i) {
			this.setState({ currentJob: i })
		} else {
			this.setState({ currentJob: -1 })
		}
	}

	render() {
		return (
			<section>
				<div className={styles['jobs-container']}>
					{jobs.map((job, index) => (
						<div key={index} className={styles['job-container']}>
							{/* TODO: 不用条件渲染才能做出动画 */}
							<div
								className={styles['job__bar']}
								onClick={this.switchVisible(index)}
							>
								<span className={styles['job__name']}>{job.name}</span>
								<span className={styles['job__location']}>
									{title.location}
									{job.location}
								</span>
								{this.state.currentJob === index ? (
									<Icon type='up' className={styles['switch-icon']} />
								) : (
									<Icon type='down' className={styles['switch-icon']} />
								)}
							</div>

							{this.state.currentJob === index ? (
								<div className={styles['job__detail']}>
									<span className={styles['detail__bold']}>
										{title.responsibility}
									</span>
									<ol>
										{job.responsibilities.map((responsibility, jndex) => (
											<li key={jndex} className={styles['detail__item']}>
												{responsibility}
											</li>
										))}
									</ol>

									<span className={styles['detail__bold']}>
										{title.requirement}
									</span>
									<ol>
										{job.requirements.map((requirement, jndex) => (
											<li key={jndex} className={styles['detail__item']}>
												{requirement}
											</li>
										))}
									</ol>

									<a
										href={`mailto:${info.email}`}
										className={styles['detail__application']}
									>
										{title.application}
									</a>
								</div>
							) : null}
						</div>
					))}
				</div>
			</section>
		)
	}
}
