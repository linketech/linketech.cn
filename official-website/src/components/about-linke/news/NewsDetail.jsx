import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'

import styles from './NewsDetail.module.css'

export default class NewsDetail extends Component {
	static propTypes = {
		newsTitle: PropTypes.string,
		newsEventTime: PropTypes.number,
		newsContent: PropTypes.string,
	}

	render() {
		return (
			<section
				className={`${styles['root']} ql-container ql-snow dropzone`}
				id='editor'
				style={{ background: 'none', boxShadow: 'none', width: '100%' }}
			>
				<header className={styles['newsInfo']}>
					<h3>{this.props.newsTitle}</h3>
					<b>
						发布时间：
						<time>
							{moment(this.props.newsEventTime * 1000).format('YYYY-MM-DD')}
						</time>
					</b>
				</header>
				{/* dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案 */}
				<div
					dangerouslySetInnerHTML={{
						__html: this.props.newsContent,
					}}
					className={'ql-editor ql-blank'}
					style={{ padding: 0, minHeight: 'auto' }}
				/>
				<style jsx>{`
					.ql-editor > p {
						padding-left: 0 !important;
						padding-right: 0 !important;
					}
				`}</style>
				<Link to='/about/news' className={styles['return-button']}>
					返回
				</Link>
			</section>
		)
	}
}
