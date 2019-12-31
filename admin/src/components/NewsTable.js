import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { message, Table, Button, Popconfirm, Typography, Layout } from 'antd'

import actions from '../redux/actions'
import { wrapperFetch } from '../util/func-handler'

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
		this.state = { selectedRowKeys: [], loading: false }
	}

	componentDidMount () {
		this.getNewsApi()
	}

	getNewsApi = async () => {
		const body = await wrapperFetch('/api/news')
		this.props.news_change(body.data)
		message.success(body.message)
	}

	onSelectChange = selectedRowKeys => {
		console.debug('selectedRowKeys changed: ', selectedRowKeys)
		this.setState({ selectedRowKeys })
	}

	onConfirmDelete = async () => {
		const url = this.state.selectedRowKeys.length === 1 ? `/api/news?id=${this.state.selectedRowKeys[ 0 ]}` : `/api/news?id=${this.state.selectedRowKeys.join('&id=')}`
		this.setState({ selectedRowKeys: [], loading: true })
		const delete_res = await wrapperFetch(url, { method: 'DELETE' })
		if (delete_res.status !== 200) {
			message.warning(delete_res.message)
			return
		}
		message.success('Delete succeed')
		this.setState({ loading: false })
		await this.getNewsApi()
	}

	render () {
		console.debug(`[NewsTable props]: ${JSON.stringify(this.props)}`)
		const project_name = (this.props.section_url.split('/admin/'))[ 1 ]
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
				<Table rowSelection={rowSelection} columns={columns} dataSource={rows} bordered={true}
					loading={{
						delay:500,
						spinning: this.state.loading
					}}
					pagination={{
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
