import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import actions from '../redux/actions'

class NewsRow extends React.Component {
	constructor (props) {
		super(props)
		this.onCheckedStatusChange = this.onCheckedStatusChange.bind(this)
		this.state = { checked: false }
	}

	onCheckedStatusChange () {
		this.setState({ checked: !this.state.checked })
		const cbs = document.getElementsByClassName('selected_style')
		if (cbs[ this.props.index ].checked === true) {
			this.props.items.push(this.props.news._id)
		} else {
			this.props.items.splice(this.props.index, 1)
		}
		this.props.selected_items_change(this.props.items)
		this.props.getItems(this.props.items)
	}

	render () {
		console.log(`[NewsRow props]: { items: ${this.props.items}, index: ${this.props.index} }`)
		console.log(`[NewsRow state]: { checked: ${this.state.checked} }`)
		const news = this.props.news
		return (
			<tr>
				<td className="cb_style">
					<input id={this.props.news._id} className="selected_style" type="checkbox" onChange={this.onCheckedStatusChange} checked={this.state.checked}></input>
					<label htmlFor={this.props.news._id}></label>
				</td>
				<td>{moment(news.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')}</td>
				<td>{moment(news.event_time * 1000).format('YYYY-MM-DD')}</td>
				<td>{news.title}</td>
				<td>{news.summary}</td>
				<td>{news.thumbnail}</td>
				<td>{news.content}</td>
			</tr>
		)
	}
}

const mapStateToProps = state => {
	return { items: state.items }
}

export default connect(mapStateToProps, actions)(NewsRow)
