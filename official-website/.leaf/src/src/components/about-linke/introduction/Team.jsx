import React, { Component } from 'react'

import styles from './Team.module.css'
import { team } from '../about-config'

export default class Team extends Component {
	render() {
		return (
			<section className={styles['team-container']}>
				<h3 className={styles['team-title']}>{team.title}</h3>
				<div className={styles['members-container']}>
					{team.members.map((member, index) => (
						<div key={index} className={styles['member__container']}>
							<div className={styles['member__info']}>
								<img src={member.avatar} alt={member.name} />
								<p className={styles['member__name']}>{member.name}</p>
								<p className={styles['member__duty']}>{member.duty}</p>
							</div>
							<div className={styles['member__achievements']}>
								{member.achievements.map((achievement, jndex) => (
									<p
										key={jndex}
										className={
											/^（/.test(achievement)
												? styles['member__comment']
												: styles['member__achievement']
										}>
										{achievement}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}
