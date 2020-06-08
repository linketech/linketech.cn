/* eslint-disable indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import axios from 'axios'

import Banner from '../components/Banner.jsx'
import Navbar from '../components/about-linke/navbar/Navbar.jsx'
import Introduction from '../components/about-linke/introduction/Introduction.jsx'
import Contact from '../components/about-linke/contact/Contact.jsx'
import Jobs from '../components/about-linke/jobs/Jobs.jsx'
import NewsList from '../components/about-linke/news/NewsList.jsx'
import NewsDetail from '../components/about-linke/news/NewsDetail.jsx'

import styles from './AboutLinke.module.css'
import { banner,testnews } from '../components/about-linke/about-config'

function checkIsDev() {
	const fontEndURL = document.documentURI
	return  /localhost:/.test(fontEndURL)
}

export default class AboutLinke extends Component {
	static propTypes = {
		match: PropTypes.object,
	}

	state = {
		newsList: [],
		currentList: [],
		currentPage: 0,
		newsTitle: '无效新闻，请返回',
		newsEventTime: 0,
		newsContent: '',
		isDev: false,
	}

	componentDidMount() {
		const isDev = checkIsDev()
		axios
			.get(`${isDev ? 'http://localhost:8080' : ''}/api/news`)
			.then((res) => {
				const data = res.data.data
				const newsList = data
					// 留意 project 可能为 '/linke'，未来可能改成正则匹配
					.filter((item) => item.project === 'linke')
					// 手动按时间排序，防止插入旧新闻在前
					.sort((a, b) => b.event_time - a.event_time)
				this.setState({ newsList }, () => this.computeCurrent(1))
			})
			.catch((err) => console.log(err))
		this.setState({ isDev })
		// const newsList = testnews.data;
		// this.setState({ newsList }, () => this.computeCurrent(1))
	}

	/**
	 * 用于路由选择
	 *
	 * @memberof AboutLinke
	 */
	chooseComponent = () => {
		switch (this.props.match.url) {
			case '/about/introduction':
				return <Introduction />
			case '/about/contact':
				return <Contact />
			case '/about/jobs':
				return <Jobs />
			case '/about/news-detail':
				return (
					<NewsDetail
						newsTitle={this.state.newsTitle}
						newsEventTime={this.state.newsEventTime}
						newsContent={this.state.newsContent}
					/>
				)
			case '/about/news':
				// 通过传递给子组件回调函数，使得子组件向父组件传递消息
				return (
					<NewsList
						newsList={this.state.newsList}
						currentList={this.state.currentList}
						currentPage={this.state.currentPage}
						readNews={this.readNews}
						computeCurrent={this.computeCurrent}
						isDev={this.state.isDev}
					/>
				)
			default:
				return null
		}
	}

	/**
	 * 用于在新闻列表中获取 newsTitle, newsEventTime, newsContent，以便传入 news-detail
	 *
	 * @memberof AboutLinke
	 */
	readNews = (title, event_time, content) => {
		const newsContent = this.state.isDev
			? content.replace(/\/api\/img/g, 'http://www.linketech.cn/api/img')
			: content
		this.setState({
			newsTitle: title,
			newsEventTime: event_time,
			newsContent,
		})
	}

	/**
	 * 改变新闻列表的滑动窗口
	 *
	 * @memberof AboutLinke
	 */
	computeCurrent = (page) => {
		const tempArr = []
		for (let i = (page - 1) * 6; i < page * 6; i += 1) {
			const newsItem = this.state.newsList[i]
			if (newsItem) {
				tempArr.push(newsItem)
			} else {
				tempArr.push({})
			}
		}
		this.setState(
			{
				currentList: tempArr,
				currentPage: page,
			},
			// () => console.log(this.state.currentList),
		)
	}

	render() {
		return (
			<main id='app-container'>
				<Banner title={banner.title} imgUrl={banner.imgUrl}>
					<div className={styles['banner__subtitle-container']}>
					{banner.subtitle}
						{/* <h2 className={styles['banner__subtitle']}>{banner.subtitle}</h2> */}
					</div>
					{/* <div className={styles['banner__bar']} /> */}
				</Banner>
				<Navbar url={this.props.match.url} />
				{/* Route 的 component 属性不接收标签形式，故使用 render 属性 */}
				<Route path={`${this.props.match.url}`} render={this.chooseComponent} />
			</main>
		)
	}
}
