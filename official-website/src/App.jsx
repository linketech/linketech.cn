import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop.jsx'
import Header from './components/common/header/Header.jsx'
import SideAffix from './components/common/side-affix/SideAffix.jsx'
import Footer from './components/common/footer/Footer.jsx'

import Home from './views/Home.jsx'
import CoreTech from './views/CoreTech.jsx'
import SmartParking from './views/SmartParking.jsx'
import AccurateLocating from './views/AccurateLocating.jsx'
import WirelessRouter from './views/WirelessRouter.jsx'
import AboutLinke from './views/AboutLinke.jsx'

import styles from './App.module.css'
import 'antd/dist/antd.css'

class App extends Component {
	render() {
		return (
			<div className={styles['App']}>
				<Router>
					<Header />
					<SideAffix />
					<ScrollToTop>
						<Route exact path='/' render={() => <Redirect to='/home' />} />
						<Route path='/home' component={Home} />
						<Route path='/core-tech' component={CoreTech} />
						<Route path='/smart-parking' component={SmartParking} />
						<Route path='/accurate-locating' component={AccurateLocating} />
						<Route path='/wireless-router' component={WirelessRouter} />
						<Route path='/about/:navId' component={AboutLinke} />
					</ScrollToTop>
					<Footer />
				</Router>
			</div>
		)
	}
}

export default App
