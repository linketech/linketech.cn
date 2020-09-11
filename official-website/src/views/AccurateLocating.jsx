import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
import CoreCompetitiveness from '../components/solutions/smart-parking/CoreCompetitiveness.jsx'
import SystemComposition from '../components/solutions/accurate-locating/SystemComposition.jsx'
import ApplicationScenario from '../components/solutions/accurate-locating/ApplicationScenario.jsx'

import {
	banner,
	coreCompetitiveness,
} from '../components/solutions/accurate-locating/locating-config'
import LocationDescript from '../components/solutions/accurate-locating/LocationDescript.jsx'

export default class AccurateLocating extends Component {
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl} />
				<CoreCompetitiveness
					title={coreCompetitiveness.title}
					imgUrls={coreCompetitiveness.imgUrls}
					slogan={coreCompetitiveness.slogan}
					schematicUrl={coreCompetitiveness.schematicUrl}
					summary={coreCompetitiveness.summary}
				/>
				<SystemComposition />
				<LocationDescript />
				<ApplicationScenario />
			</main>
		)
	}
}
