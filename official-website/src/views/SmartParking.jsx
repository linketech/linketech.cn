import React, { Component } from 'react'

import Banner from '../components/Banner.jsx'
// import VideoButton from '../components/VideoButton.jsx'
import CoreCompetitiveness from '../components/solutions/smart-parking/CoreCompetitiveness.jsx'
import SystemComposition from '../components/solutions/smart-parking/SystemComposition.jsx'
import ApplicationScenario from '../components/solutions/smart-parking/ApplicationScenario.jsx'
import styles from './SmartParking.module.css'

import {
	banner,
	coreCompetitiveness,
} from '../components/solutions/smart-parking/parking-config'
import ParkingSpaceDetector from '../components/solutions/smart-parking/ParkingSpaceDetector.jsx'
import ParkingSpaceStatusCollection from '../components/solutions/smart-parking/ParkingSpaceStatusCollection.jsx'

export default class SmartParking extends Component {

	componentDidMount() { 
	}
   
	render() {
		return (
			<main>
				<Banner title={banner.title} imgUrl={banner.imgUrl}>
					{/* <VideoButton videoUrl={banner.videoUrl} videoTitle={banner.title} /> */}
					<div className={styles['banner__subtitle_container']}> 
						<h2 className={styles['banner__subtitle']}>{banner.subtitle}</h2>
					</div>
				</Banner>
				<CoreCompetitiveness
					title={coreCompetitiveness.title}
					imgUrls={coreCompetitiveness.imgUrls}
					slogan={coreCompetitiveness.slogan}
					schematicUrl={coreCompetitiveness.schematicUrl}
					summary={coreCompetitiveness.summary}
				/>
				<SystemComposition />
				<ParkingSpaceDetector/>
				<ParkingSpaceStatusCollection/>
				<ApplicationScenario />
			</main>
		)
	}
}
