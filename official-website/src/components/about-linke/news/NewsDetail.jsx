import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './NewsDetail.module.css'

export default class NewsDetail extends Component {
	static propTypes = {
		newsContent: PropTypes.string,
	}

	render() {
		return (
			<section
				className={`${styles['root']} ql-container ql-snow dropzone`}
				id='editor'
				style={{ background: 'none', boxShadow: 'none' }}
			>
				{/* dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案 */}
				<div
					dangerouslySetInnerHTML={{ __html: this.props.newsContent }}
					className={'ql-editor ql-blank'}
				/>
				<Link to='/about/news' className={styles['return-button']}>
					返回
				</Link>
			</section>
		)
	}
}
