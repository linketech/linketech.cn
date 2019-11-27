import React, { Component } from 'react'

import styles from './QualificationAndPartner.module.css'
import { qualificationAndPartner } from '../about-config'

export default class QualificationAndPartner extends Component {
	render() {
		return (
			<section className={styles['QAP-container']}>
				<h3 className={styles['QAP-title']}>
					{qualificationAndPartner.qualification.title}
				</h3>
				<div className={styles['qualification-container']}>
					{qualificationAndPartner.qualification.paragraphs.map(
						(paragraph, index) => (
							// 外部循环是纵向输出三段文字
							<p key={index}>
								{paragraph.normal.map((text, jndex) => (
									// 内部循环是使每行两张文字交错显示
									<span key={jndex} className={styles['paragraph-normal']}>
										{text}
										{paragraph.highlight[jndex] ? (
											<em className={styles['paragraph-highlight']}>
												{paragraph.highlight[jndex]}
											</em>
										) : null}
									</span>
								))}
							</p>
						),
					)}
					<img
						src={qualificationAndPartner.qualification.certificateImg}
						alt={qualificationAndPartner.qualification.title}
						className={styles['img']}
					/>
				</div>
				<h3 className={styles['QAP-title']}>
					{qualificationAndPartner.partners.title}
				</h3>
				<img
					src={qualificationAndPartner.partners.partnerImg}
					alt={qualificationAndPartner.partners.title}
					className={styles['img']}
				/>
			</section>
		)
	}
}
