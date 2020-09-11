import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
// import VideoButton from '../components/VideoButton.jsx'
// import RouterFeature from '../components/solutions/wireless-router/RouterFeature.jsx'

import { banner } from '../components/solutions/wireless-router/router-config'
import MerckuFeature from '../components/solutions/wireless-router/MerckuFeature.jsx'
import MerckuFeatureList from '../components/solutions/wireless-router/MerckuFeatureList.jsx'
import MerckuSignal from '../components/solutions/wireless-router/MerckuSignal.jsx'
import ProductComparison from '../components/solutions/wireless-router/ProductComparison.jsx'
import MerckuHonor from '../components/solutions/wireless-router/MerckuHonor.jsx'

export default class WirelessRouter extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl}></Banner>
				<MerckuFeature />
				<MerckuFeatureList />
				<MerckuSignal />
				<ProductComparison />
				<MerckuHonor />
			</main>
		)
	}
}
