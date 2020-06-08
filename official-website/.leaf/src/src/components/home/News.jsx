import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './News.module.css'
import { news } from './home-config'

export default class News extends Component {
	render() {
		return (
			<section>
				<div className={styles['flex-container']}>
					<div className={styles['small-screen']}>
						<h3 className={styles['news-big-title']}>
							{news.bigTitle}
							{/* 都是行内元素 */}
							<span className={styles['news-small-title']}>
								{news.smallTitle}
							</span>
						</h3>
					</div>
					<div className={styles['large-screen']}>
						<h3 className={styles['news-big-title']}>
							{news.bigTitle}
							{/* 都是行内元素 */}
							<span className={styles['news-small-title']}>
								{news.smallTitle}
							</span>
						</h3>

						{/* 新闻标题 */}
						<h4 className={styles['news-title']}>{news.latestNews.title}</h4>

						{/* 标题下的分界线 */}
						<div className={styles['news-hr']} />

						{/* 新闻内容 */}
						<p className={styles['news-paragraph']}>
							{news.latestNews.summary}
						</p>

						<Link to={news.latestNews.href}>
							<div className={styles['more-info']}>更多资讯</div>
						</Link>
					</div>
					<div className={styles['image-container']}>
						{/* 外层 div 便于布局 */}
						<img
							src={news.imgUrl}
							alt={news.latestNews.title}
							className={styles['news-image']}
						/>
					</div>
				</div>

				<div className={styles['small-screen']}>
					{/* 新闻标题 */}
					<h4 className={styles['news-title']}>{news.latestNews.title}</h4>

					{/* 标题下的分界线 */}
					<div className={styles['news-hr']} />

					{/* 新闻内容 */}
					<p className={styles['news-paragraph']}>{news.latestNews.summary}</p>

					<Link to={news.latestNews.href}>
						<div className={styles['more-info']}>更多资讯</div>
					</Link>
				</div>
			</section>
		)
	}
}
