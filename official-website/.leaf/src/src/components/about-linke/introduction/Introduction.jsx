import React, { Component } from 'react'

import Brief from './Brief.jsx'
import Team from './Team.jsx'
import QualificationAndPartner from './QualificationAndPartner.jsx'

export default class Introduction extends Component {
	render() {
		return (
			<div>
				<Brief />
				<Team />
				<QualificationAndPartner />
			</div>
		)
	}
}
