/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Pagination, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import moment from 'moment'

import styles from './NewsList.module.css'

export default class NewsList extends Component {
	static propTypes = {
		newsList: PropTypes.array,
		currentList: PropTypes.array,
		currentPage: PropTypes.number,
		readNewsId: PropTypes.func,
		computeCurrent: PropTypes.func,
		isDev: PropTypes.bool,
	}

	/**
	 * 向父组件传入 newsContent
	 *
	 * @memberof NewsList
	 */
	handleClick = (title, event_time, content) => () => {
		const { readNews } = this.props
		readNews(title, event_time, content)
	}

	render() {
		return (
			<section className={styles['root']}>
				<Row gutter={16} className={styles['news-container']}>
					{this.props.currentList.map(
						(newsItem) =>
							newsItem._id ? (
								<Col
									sm={12}
									lg={8}
									key={newsItem._id}
									className={styles['news-item']}
								>
									<Link
										to='/about/news-detail'
										onClick={this.handleClick(
											newsItem.title,
											newsItem.event_time,
											newsItem.content,
										)}
										className={styles['link']}
									>
										<img
											src={`${this.props.isDev ? 'http://localhost:8080' : ''}${
												newsItem.thumbnail
											}`}
											className={styles['news__thumbnail']}
											alt={newsItem.title}
											crossOrigin={'anonymous'}
											referrerPolicy={'no-referrer'}
										/>

										<h3 className={styles['news__title']}>{newsItem.title}</h3>
										<p className={styles['news__date']}>
											<time>
												{moment(newsItem.event_time * 1000).format(
													'YYYY-MM-DD',
												)}
											</time>
										</p>
										{newsItem._id ? (
											<div className={styles['news__hr']} />
										) : null}
										<p className={styles['news__summary']}>
											{newsItem.summary}
										</p>
									</Link>
								</Col>
							) : null,
						// eslint-disable-next-line function-paren-newline
					)}
				</Row>
				<Pagination
					current={this.props.currentPage}
					defaultPageSize={6}
					total={this.props.newsList.length}
					onChange={this.props.computeCurrent}
				/>
			</section>
		)
	}
}
