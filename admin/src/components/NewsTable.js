import React from 'react'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert' // Import
import { trackPromise } from 'react-promise-tracker'
import { message } from 'antd'

import actions from '../redux/actions'
import NewsRow from './NewsRow'
import { Spinner } from './spinner'

import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class NewsTable extends React.Component {
	constructor (props) {
		super(props)
		this.onSelectStatusChange = this.onSelectStatusChange.bind(this)
		this.onConfirmDelete = this.onConfirmDelete.bind(this)
	}

	componentDidMount () {
		trackPromise(
			this.getNewsApi()
				.then((res) => {
					this.props.news_change(res.data)
					message.success(res.message)
				})
				.catch((err) => {
					console.error(err.stack)
					message.error(err.message)
				})
		)
	}

	selectModeOn (ele_list) {
		document.getElementById('manage_btn').innerHTML = 'Cancel'
		document.getElementById('manage_btn').style[ 'backgroundColor' ] = 'red'
		document.getElementById('status_header').style[ 'display' ] = 'table-cell'
		document.getElementById('delete_btn').style[ 'display' ] = 'table-cell'
		for (let i = 0; i < ele_list.length; i += 1) {
			ele_list[ i ].style[ 'display' ] = 'table-cell'
		}
	}

	selectModeOff (ele_list) {
		document.getElementById('manage_btn').innerHTML = 'Manage news'
		document.getElementById('manage_btn').style[ 'backgroundColor' ] = '#4CAF50'
		document.getElementById('status_header').style[ 'display' ] = 'none'
		document.getElementById('delete_btn').style[ 'display' ] = 'none'
		for (let i = 0; i < ele_list.length; i += 1) {
			ele_list[ i ].style[ 'display' ] = 'none'
		}
	}

	getNewsApi = async () => {
		const response = await fetch('/api/news')
		const body = await response.json()
		if (response.status !== 200) throw new Error(body.message)
		return body
	}

	getItems (items) {
		this.props.parent_items_change(items)
	}

	onSelectStatusChange () {
		const eles = document.getElementsByClassName('cb_style')
		if (this.props.select_mode === false) {
			this.selectModeOn(eles)
		}
		if (this.props.select_mode === true) {
			this.selectModeOff(eles)
		}
		this.props.select_mode_change(!this.props.select_mode)
	}

	onConfirmDelete = async () => {
		let url = '/api/news'
		const eles = document.getElementsByClassName('cb_style')
		if (this.props.parent_items.length > 0) {
			if (this.props.parent_items.length === 1) {
				url = `${url}?id=${this.props.parent_items[ 0 ]}`
			}
			if (this.props.parent_items.length > 1) {
				url = `${url}?id=${this.props.parent_items.join('&id=')}`
			}
		}
		trackPromise(
			fetch(url, { method: 'DELETE', mode: 'cors' })
				.then(() => this.getNewsApi())
				.then(res => this.props.news_change(res.data))
				.then(() => {
					this.selectModeOff(eles)
					message.success('Delete succeed')
				})
				.catch((err) => {
					console.error(err.stack)
					message.error(err.message)
				})
		)
	}

	render () {
		console.log(`[NewsTable props]: ${JSON.stringify(this.props)}`)
		const rows = []
		const project_name = (this.props.section_url.split('/'))[ 1 ]
		const filtered_list = this.props.news.filter(e => e.project === project_name)
		filtered_list.forEach((ele, index) => {
			rows.push(
				<NewsRow news={ele} key={ele._id} index={index} getItems={this.getItems.bind(this)}></NewsRow>
			)
		})
		return (
			<div className="newstable">
				<h1>NewsTable</h1>
				<button id="manage_btn" className="normal_btn" onClick={this.onSelectStatusChange}>Manage news</button>
				<button id="delete_btn" className="normal_btn" onClick={() => {
					confirmAlert({
						customUI: ({ onClose }) => {
							return (
								<div className='custom-ui'>
									<h1>Are you sure?</h1>
									<p>You want to delete these news?</p>
									<button onClick={onClose}>NO</button>
									<button onClick={() => {
										this.onConfirmDelete()
										onClose()
									}}>YES</button>
								</div>
							)
						}
					})
				}}>Delete</button>
				<table>
					<thead>
						<tr>
							<th id="status_header">Status</th>
							<th>Date</th>
							<th>EventTime</th>
							<th>Title</th>
							<th>Summary</th>
							<th>Thumbnail</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				<Spinner />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { news: state.news, select_mode: state.select_mode, parent_items: state.parent_items }
}

export default connect(mapStateToProps, actions)(NewsTable)
