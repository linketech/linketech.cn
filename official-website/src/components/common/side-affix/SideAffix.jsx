import React, { Component } from 'react'
import { Affix } from 'antd'

import SideIcon from './SideIcon.jsx'

import infoConfig from '../info-config'

import styles from './SideAffix.module.css'

export default class SideAffix extends Component {
	state = {
		top: 400,
	}

	render() {
		return (
			<Affix offsetTop={this.state.top} className={styles['affix-container']}>
				{infoConfig.icons.map((icon, index) => (
					<SideIcon icon={icon} key={index} />
				))}
			</Affix>
		)
	}
}
