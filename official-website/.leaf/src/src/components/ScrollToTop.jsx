import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

// https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends React.Component {
	static propTypes = {
		location: PropTypes.object,
		children: PropTypes.array,
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname === '/home') {   
			document.getElementById('root').scrollTo(0,0);
		}
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollToTop)
