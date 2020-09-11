import homeBanner from './home-banner.jpg'

import slider_parking from './slider_parking.png'
import slider_dms from './slider_dms.png'
import slider_uu from './slider_uu.png'
import slider_mercku from './slider_mercku.png'

// import newsPhoto from './home-news-photo.jpg'
import newsPhoto from './2019-05-14.jpg'

import aboutBackground from './home-about-background.jpg'

export const banner = {
	title: '',//'物联网+智能停车场',
	imgUrl: homeBanner,
}

export const carousels = [
	{
		title: '智慧停车系统解决方案',
		features: [
			'基于NB-IoT窄带物联网技术和自主研发的高灵敏双模车检器，',
			'将车位状态的数字信息通过5G频段回传。',
		],
		href: '/smart-parking',
		imgUrl: slider_parking,
	},
	{
		title: '形变监测系统解决方案',
		features: [
			'毫米级别的静态定位精度，100%国产化，',
			'完全自主知识产权及核心算法，',
			'广泛应用在桥梁、铁路、大坝、楼宇等结构安全检测领域'
		],
		href: '/accurate-locating',
		imgUrl: slider_dms,
	},
	{
		title: 'UU加速盒',
		features: [
			'独家为网易游戏赋能的加速器，',
			'支持三大主机，采用自有知识产权的WHEMS天线，',
			'解决产品运行时延时、卡机、掉线等问题。'
		],
		href: '/uu-box',
		imgUrl: slider_uu,
	},
	{
		title: 'Mercku路由器',
		features: [
			'为Mercku公司独家赋能的高性能WIFI路由器，',
			'实测平均下载速率突破720Mbps（业界平均水平为400Mbps）。',
		],
		href: '/wireless-router',
		imgUrl: slider_mercku,
	},
]

export const news = {
	bigTitle: 'NEWS',
	smallTitle: '新闻资讯',
	latestNews: {
		title: '院士级合伙人！他改变了现代智能手机，如今又在横琴玩转5G停车',
		summary:
			'建设粤港澳大湾区，既是新时代推动形成全面开放新格局的新尝试，也是推动“一国两制”事业发展的新实践。澳门-珠海是粤港澳大湾区建设的重要一极。在珠海这片湾区热土上，每天奔忙着形形色色的追梦人，上演着各不相同的追梦故事。',
		href: '/about/news',
	},
	imgUrl: newsPhoto,
}

export const about = {
	imgUrl: aboutBackground,
	bigTitle: 'ABOUT US',
	smallTitle: '关于我们',
	paragraphs: [
		'总部位于珠海横琴自贸区，在成都、南京、北京及加拿大滑',
		'铁卢设有分部。',
		'公司专注于物联网及终端系统的自主研发，核心技术团队',
		'具有多年工程及研发经验，在理论突破指引下，能够做出',
		'成本低、性能优异的无线产品。',
	],
}

export default { banner, carousels, news, about }
