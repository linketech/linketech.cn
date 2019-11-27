import React from "react"
import { usePromiseTracker } from "react-promise-tracker"
import Loader from "react-loader-spinner"
import "../spinner.css"

export const Spinner = props => {
	const { promiseInProgress } = usePromiseTracker()

	return (
		promiseInProgress && (
			<div className="spinner">
				<Loader type="Audio" color="#2BAD60" height={100} width={100} />
			</div>
		)
	)
}
