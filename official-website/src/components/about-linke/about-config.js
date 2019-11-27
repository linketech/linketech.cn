import bannerImg from './about-linke-banner.jpg'

import light1 from './navbar/icon-light-1.png'
import light2 from './navbar/icon-light-2.png'
import light3 from './navbar/icon-light-3.png'
import light4 from './navbar/icon-light-4.png'

import dark1 from './navbar/icon-dark-1.png'
import dark2 from './navbar/icon-dark-2.png'
import dark3 from './navbar/icon-dark-3.png'
import dark4 from './navbar/icon-dark-4.png'

import qiyihong from './introduction/qi-yi-hong.jpg'
import yuwei from './introduction/yu-wei.jpg'
import zhuyu from './introduction/zhu-yu.jpg'

import certificate from './introduction/certificate.jpg'
import partners from './introduction/partners.jpg'

import contact1 from './contact/contact-1.png'
import contact2 from './contact/contact-2.png'
import contact3 from './contact/contact-3.png'

// 通过导入，不用改两处
import infoConfig from '../common/info-config'

/**
 * 关于领翌整个页面的配置
 */

export const banner = {
	title: 'ABOUT LINKE',
	imgUrl: bannerImg,
	subtitle: '关于领翌',
}

export const navItems = [
	{
		light: light1,
		dark: dark1,
		name: '公司介绍',
		href: '/about/introduction',
	},
	{
		light: light2,
		dark: dark2,
		name: '新闻中心',
		href: '/about/news',
	},
	{
		light: light3,
		dark: dark3,
		name: '人才招聘',
		href: '/about/jobs',
	},
	{
		light: light4,
		dark: dark4,
		name: '联系我们',
		href: '/about/contact',
	},
]

export const brief = {
	title: '公司介绍',
	paragraphs: [
		'领翌技术（横琴）有限公司是由加拿大工程院院士漆一宏,2018年归国创办的科技研发型企业。总部位于国家批复的开放程度高、创新空间广的国家级新区-珠海横琴新区，注册资本3000万元。',
		'公司专注于搭建无线技术赋能平台，开展无线产品研发和孵化。漆一宏院士及其核心团队通过三十余年理论研究与实践，发现了颠覆教科书的紧耦合无线收发机理论与技术（400项发明专利，90篇核心论文），基于上述核心无线技术，领翌团队将赋能用户需要的各种无线产品，将产品的无线性能做得更好，通过技术创新推动无线技术产业发展。',
		'目前，领翌团队正在对“智慧停车系统”、“精准定位系统”及“高性能无线路由器”三类已有的无线产品进行全新赋能。通过核心无线技术推广应用，实现大容量、高速率、广覆盖、稳定、可靠的新一代高性能无线产品，推进整个无线系统的普适性、泛在性、智能型、环保性发展。',
	],
}

export const team = {
	title: '团队介绍',
	members: [
		{
			avatar: qiyihong,
			name: '漆一宏 博士',
			duty: '无线技术基础理论攻关',
			achievements: [
				'加拿大工程院院士',
				'原Blackberry（黑莓）创始团队成员',
				'现代智能手机天线的发明者',
				'全球超过400项专利及论文',
			],
		},
		{
			avatar: zhuyu,
			name: '朱宇 博士',
			// duty: '企业管理及市场拓展',
			duty: '企业运营及客户拓展',
			achievements: [
				'中国移动集团公司15年工作经验',
				'前中国移动一级子公司党委委员',
				// '中国移动集团客户业务主要发起者',
				// '成功运营一家公司海外上市',
			],
		},
		{
			avatar: yuwei,
			name: '于伟 博士',
			duty: '无线产品设计及企业运作',
			achievements: [
				'原信维通信创始人',
				// '（全球手机天线供应商龙头）',
				'IEEE EMC技术成就奖获得者',
				'前航天部重点实验室副主任',
				// '成功运作五家科技创业公司',
			],
		},
	],
}

export const qualificationAndPartner = {
	qualification: {
		title: '企业资质',
		paragraphs: [
			// {
			// 	normal: [
			// 		'国家高新技术企业、双软认定企业、2019年获得横琴政府',
			// 		'元研发支持',
			// 	],
			// 	highlight: ['2000万'],
			// },
			{
				normal: ['获得授权发明专利', '项、授权实用新型专利', '项'],
				highlight: ['18', '11'],
			},
			{
				normal: ['', '项发明专利申请进入实质审查阶段'],
				highlight: ['17'],
			},
		],
		certificateImg: certificate,
	},
	partners: { title: '合作伙伴', partnerImg: partners },
}

export const contact = {
	info: [
		{
			icon: contact1,
			name: '公司',
			detail: ['领翌技术（横琴）有限公司'],
			comment: '',
		},
		{
			icon: contact2,
			name: '地址',
			detail: [infoConfig.address],
			comment: '',
		},
		{
			icon: contact3,
			name: '电话',
			detail: [infoConfig.hotlineTel],
			comment: '（周一至周五 8:30-17:30）',
		},
	],
}

/**
 * 详情见 react-amap 文档
 * https://elemefe.github.io/react-amap/articles/start
 */
export const amap = {
	// amapkey 由公司提供
	amapkey: '479c8ecf73ca9afc4d7b7d4ff4551ccb',
	// 当前最新版本为 1.4.14
	version: '1.4.14',
	// 初始中心的经纬度
	mapCenter: { longitude: 113.5418, latitude: 22.13 },
	// 提供标尺参照和放缩工具
	plugins: ['Scale', 'ControlBar'],
	// 放缩范围在 3~20
	zoom: 10,
	infoWindow: {
		size: {
			width: 300,
			height: 150,
		},
		position: { longitude: 113.5418, latitude: 22.1302 },
	},
}

export default {
	banner,
	navItems,
	brief,
	team,
	qualificationAndPartner,
	contact,
	amap,
}
