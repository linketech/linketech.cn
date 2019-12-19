import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { message, Table, Button, Popconfirm, Typography, Layout } from 'antd'

import actions from '../redux/actions'

const { Title } = Typography
const columns = [
	{
		title: 'CreateTime',
		dataIndex: 'createTime',
		key: 'createTime',
		align: "center",
		ellipsis: true
	},
	{
		title: 'EventTime',
		dataIndex: 'eventTime',
		key: 'eventTime',
		align: "center",
		ellipsis: true
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
		align: "center",
		ellipsis: true
	},
	{
		title: 'Summary',
		dataIndex: 'summary',
		key: 'summary',
		align: "center",
		ellipsis: true
	},
	{
		title: 'Thumbnail',
		dataIndex: 'thumbnail',
		key: 'thumbnail',
		align: "center",
		ellipsis: true
	},
]

class NewsTable extends React.Component {
	constructor (props) {
		super(props)
		this.state = { selectedRowKeys: [] }
	}

	componentDidMount () {
		this.getNewsApi()
			.then((res) => {
				this.props.news_change(res.data)
				message.success(res.message)
			})
			.catch((err) => {
				console.error(err.stack)
				message.error(err.message)
			})
	}

	getNewsApi = async () => {
		const response = await fetch('/api/news')
		const body = await response.json()
		if (response.status !== 200) {
			message.error(response.statusText)
			return
		}
		return body
	}

	onSelectChange = selectedRowKeys => {
		console.debug('selectedRowKeys changed: ', selectedRowKeys)
		this.setState({ selectedRowKeys })
	}

	onConfirmDelete = async () => {
		let url = '/api/news'
		if (this.state.selectedRowKeys.length > 0) {
			if (this.state.selectedRowKeys.length === 1) {
				url = `${url}?id=${this.state.selectedRowKeys[ 0 ]}`
			}
			if (this.state.selectedRowKeys.length > 1) {
				url = `${url}?id=${this.state.selectedRowKeys.join('&id=')}`
			}
		}
		fetch(url, { method: 'DELETE', mode: 'cors' })
			.then(() => this.getNewsApi())
			.then(res => this.props.news_change(res.data))
			.then(() => {
				message.success('Delete succeed')
				this.setState({ selectedRowKeys: [] })
			})
			.catch((err) => {
				console.error(err.stack)
				message.error(err.message)
			})
	}

	render () {
		console.debug(`[NewsTable props]: ${JSON.stringify(this.props)}`)
		const project_name = (this.props.section_url.split('/'))[ 1 ]
		const { selectedRowKeys } = this.state
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		}
		const hasSelected = selectedRowKeys.length > 0
		const filtered_list = this.props.news.filter(e => e.project === project_name)
		const rows = filtered_list.map((e, index) => Object.assign({}, {
			key: e._id,
			createTime: moment(e.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss'),
			eventTime: moment(e.event_time * 1000).format('YYYY-MM-DD'),
			title: e.title,
			summary: e.summary,
			thumbnail: e.thumbnail
		}))
		return (
			<Layout style={{ borderStyle: "groove", borderWidth: "3px", marginBottom: "30px", backgroundColor: "white" }}>
				<div style={{ marginBottom: 10 }}>
					<Popconfirm
						title="Are you sure to delete these news?"
						onConfirm={this.onConfirmDelete}
						okText="Yes"
						cancelText="No"
					>
						<Button style={{ width: "fit-content" }} type="primary" disabled={!hasSelected}>
							Delete
						</Button>
					</Popconfirm>
					<span style={{ marginLeft: 8 }}>
						{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
					</span>
				</div>
				<Title style={{ textAlign: "center", marginBottom: "50px" }} level={2}>NewsTable</Title>
				<Table rowSelection={rowSelection} columns={columns} dataSource={rows} bordered={true} pagination={{
					pageSize: 5,
					showTotal: (total, range) => `${range[ 0 ]}-${range[ 1 ]} of ${total} items`
				}} />
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return { news: state.news }
}

export default connect(mapStateToProps, actions)(NewsTable)
