import homeBanner from './home-banner.jpg'

import slider1 from './slider-1.jpg'
import slider2 from './slider-2.jpg'
import slider3 from './slider-3.jpg'

// import newsPhoto from './home-news-photo.jpg'
import newsPhoto from './2019-05-14.jpg'

import aboutBackground from './home-about-background.jpg'

export const banner = {
	title: '物联网+智能停车场',
	imgUrl: homeBanner,
}

export const carousels = [
	{
		title: '智慧停车系统解决方案',
		features: [
			'NB-IoT技术使得在停车位上安装传感器变得容易，',
			'进而能够将海量的停车位进行数字化智慧管理...',
		],
		href: '/smart-parking',
		imgUrl: slider1,
	},
	{
		title: '精准定位系统解决方案',
		features: [
			'优异的定位性能，定位精度高达2mm,比业界水平提升50倍，',
			'成本降低10倍。实现产品100%国产化，且拥有完全知识产权。',
		],
		href: '/accurate-locating',
		imgUrl: slider2,
	},
	{
		title: '高性能无线路由器解决方案',
		features: [
			'平均下载速率全球首次突破700Mb/s 。时延低，',
			'空口时延小于3ms;高速率，传输速率超过720Mbps 。',
		],
		href: '/wireless-router',
		imgUrl: slider3,
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
		'总部位于珠海横琴自贸区，在成都、南京、北京及加拿大滑铁卢设有分部。',
		'公司专注于物联网及终端系统的自主研发，核心技术团队具有多年工程及研发经验，在理论突破指引下，',
		'能够做出成本低、性能优异的无线产品。',
	],
}

export default { banner, carousels, news, about }
