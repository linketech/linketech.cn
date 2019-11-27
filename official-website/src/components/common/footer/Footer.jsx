import React, { Component } from 'react'
import { Row, Col } from 'antd'

import FooterItem from './FooterItem.jsx'

import navConfig from '../nav-config'
import infoConfig from '../info-config'
import styles from './Footer.module.css'

export default class Footer extends Component {
	render() {
		return (
			<footer className={styles['footer-background']}>
				<address className={styles['footer-container']}>
					<Row className={styles['row-container']}>
						{navConfig.map((navItem) => {
							if (navItem.name !== '首页') {
								return (
									<Col sm={24} lg={5} key={navItem.name}>
										<FooterItem
											name={navItem.name}
											href={navItem.href}
											submenu={navItem.submenu}
										/>
									</Col>
								)
							}
							return null
						})}
						{/* 联系的方式是写死的 */}
						<Col sm={24} lg={9}>
							<address
								// flex-item 使二维码横向
								className={`${styles['flex-item']} ${styles['address']}`}
							>
								<div>
									<p className={styles['info']}>
										邮箱(E-mail):{' '}
										<a
											href={`mailto:${infoConfig.email}`}
											className={styles['link']}
										>
											{infoConfig.email}
										</a>
									</p>
									<p className={styles['info']}>
										全国咨询热线:
										<br />
										<b className={styles['hotline']}>{infoConfig.hotlineTel}</b>
									</p>
								</div>
								<div className={styles['qrcode']}>
									<img
										src={infoConfig.QRcode}
										alt='https://linketech.cn'
										className={styles['qrcode-img']}
									/>
								</div>
							</address>
						</Col>
					</Row>

					{/* 联系的方式是写死的 */}
					<address className={`${styles['copyright']} ${styles['address']}`}>
						<p>地址(Address): {infoConfig.address}</p>
						<p>
							{`©2018-${new Date().getFullYear()}`} {infoConfig.company} {''}
							<a
								href='//www.beian.miit.gov.cn'
								rel='noopener noreferrer'
								target='_blank'
								className={styles['a']}
							>
								{infoConfig.ICP}
							</a>
						</p>
						<p>
							友情链接：
							<a
								href='//www.dbjtech.com'
								rel='noopener noreferrer'
								target='_blank'
								className={styles['a']}
							>
								珠海德百祺科技有限公司
							</a>
						</p>
					</address>
				</address>
			</footer>
		)
	}
}
