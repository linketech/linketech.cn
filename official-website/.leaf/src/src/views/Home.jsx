import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
import Sliders from '../components/home/Sliders.jsx'
import News from '../components/home/News.jsx'
import About from '../components/home/About.jsx'

import { banner } from '../components/home/home-config'

export default class Home extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl} />
				<Sliders />
				<News />
				<About />
			</main>
		)
	}
}
