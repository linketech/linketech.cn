import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
import VideoButton from '../components/VideoButton.jsx'
import CoreCompetitiveness from '../components/solutions/smart-parking/CoreCompetitiveness.jsx'
import SystemComposition from '../components/solutions/smart-parking/SystemComposition.jsx'
import ApplicationScenario from '../components/solutions/smart-parking/ApplicationScenario.jsx'

import {
	banner,
	coreCompetitiveness,
} from '../components/solutions/smart-parking/parking-config'

export default class SmartParking extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl}>
					<VideoButton videoUrl={banner.videoUrl} videoTitle={banner.title} />
				</Banner>
				<CoreCompetitiveness
					title={coreCompetitiveness.title}
					imgUrls={coreCompetitiveness.imgUrls}
					slogan={coreCompetitiveness.slogan}
				/>
				<SystemComposition />
				<ApplicationScenario />
			</main>
		)
	}
}
