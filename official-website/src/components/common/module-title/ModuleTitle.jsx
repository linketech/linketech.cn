import React, { Component } from 'react';
import styles from './ModuleTitle.module.css'
import PropTypes from 'prop-types'

class ModuleTitle extends Component {

    static propTypes = {
		isRight: PropTypes.bool,
		isWhite: PropTypes.bool,
		title: PropTypes.string, 
	}

    render() {
        return (
            <div className={styles['title-container']}>
					<h3 className={styles[this.props.isWhite ? (this.props.isRight?'title-white':'title-left-white'):(this.props.isRight ? 'title' : 'title-left')]}>{this.props.title}</h3>
					<div className={styles[this.props.isWhite ? (this.props.isRight?'line-white':'line-left-white'):(this.props.isRight ? 'line' : 'line-left')]}></div>
			</div>
        );
    }
}

export default ModuleTitle;