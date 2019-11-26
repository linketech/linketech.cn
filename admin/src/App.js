import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import logo from './logo2.png'
import Section from './components/Section'
import Navigation from './components/Navigation'
import NewsContext from './components/news-context'
import actions from './redux/actions'

class App extends React.Component {
	componentDidMount () {
		this.getNewsApi()
			.then((res) => this.props.news_change(res.data))
			.catch((err) => console.error(err.stack))
	}

	getNewsApi = async () => {
		const response = await fetch('/api/news')
		const body = await response.json()
		if (response.status !== 200) throw new Error(body.message)
		return body
	}

	render () {
		return (
			<Router>
				<div className='App'>
					<div className='header'>
						<img src={logo} className='App-logo' alt='logo' />
						<h1>Linke Technology</h1>
					</div>
					<Navigation></Navigation>
					<NewsContext.Provider value={this.props.news}>
						<Route exact path='/' component={Home} />
						<Route path='/linke' component={Section} />
						<Route path='/dbj' component={Section} />
					</NewsContext.Provider>
				</div>
			</Router>
		)
	}
}

class Home extends React.Component {
	render () {
		return (
			<div>
				<h1>Home</h1>
				<p className='left'>This is home page</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { news: state.news }
}

export default connect(mapStateToProps, actions)(App)
