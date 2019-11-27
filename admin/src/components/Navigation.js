import React from 'react'
import { Link } from "react-router-dom"

function Navigation (props) {
	return (
		<div className="nav">
			<h3>Navigation</h3>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/linke">Linke</Link>
				</li>
				<li>
					<Link to="/dbj">DBJ</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navigation
