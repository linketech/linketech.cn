import React, { Component } from 'react'
import { Carousel } from 'antd'
import { Link } from 'react-router-dom'

import './Carousel.css'
import styles from './Sliders.module.css'
import { carousels } from './home-config'

export default class Sliders extends Component {
	render() {
		return (
			<Carousel autoplay>
				{/* 轮播图给的图片宽度 1920px */}
				{carousels.map((carousel, index) => (
					// 最外面这层无法设置高宽
					<div key={index}>
						<div className={styles['root-container']}> 
							<div className={styles['slider-container']}>
								<h3 className={styles['slider-title']}>{carousel.title}</h3>
								{carousel.features.map((feature, jndex) => (
									<p key={jndex} className={styles['slider-feature']}>
										{feature}
									</p>
								))} 
								<Link to={carousel.href}>
									<div className={styles['slider-detail']}>查看详情</div>
								</Link>
							</div>
							<span className={styles['product-img-container']}>
								<img src={carousel.imgUrl} className={styles['product-img']}></img>
							</span>
						</div>
					</div>
				))}
			</Carousel>
		)
	}
}
