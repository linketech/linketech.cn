import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
// import VideoButton from '../components/VideoButton.jsx'
import RouterFeature from '../components/solutions/wireless-router/RouterFeature.jsx'

import {
	banner,
	// video,
	features,
} from '../components/solutions/wireless-router/router-config'

export default class WirelessRouter extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl}></Banner>
				{features.map((feature, index) => (
					<RouterFeature
						key={index}
						name={feature.name}
						benefits={feature.benefits}
						icon={feature.icon}
						background={feature.background}
						align={feature.align}
					/>
				))}
			</main>
		)
	}
}
