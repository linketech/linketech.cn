import bannerImg from './core-tech-banner.jpg'

import advantage1 from './advantage-1.png'
import advantage2 from './advantage-2.png'
import advantage3 from './advantage-3.png'
import advantage4 from './advantage-4.png'

import empowerment1 from './empowerment-1.png'
import empowerment2 from './empowerment-2.png'
import empowerment3 from './empowerment-3.png'
import empowerment4 from './empowerment-4.png'
import empowerment5 from './empowerment-5.png'
import background from './empowerment-background.jpg'

/**
 * 核心技术整个页面的配置
 */

export const banner = {
	title: '核心技术',
	imgUrl: bannerImg,
	// subtitle: '紧耦合无线接收机理论',
	// subtitle: '基于紧耦合无线接收机理论构建的赋能平台',
	// subtitle: '打造基于紧耦合无线接收机理论构建的赋能平台',
	subtitle: '基于紧耦合无线接收机理论构建的赋能平台',
}

export const advantages = {
	title: '技术优势', 
	background,
	items: [
		{
			imgUrl: advantage1,
			features: ['过滤外部噪音，降低发射机自身噪音', '提高系统性能'],
		},
		{
			imgUrl: advantage2,
			features: ['减少研发周期', '无需“试错”'],
		},
		{
			imgUrl: advantage3,
			features: ['性能优异，覆盖广', '降低部署成本'],
		},
		{
			imgUrl: advantage4,
			features: ['灵敏度高，所需无线发射信号的功率小', '对人体影响少'],
		},
	],
}

export const empowerment = {
	// title: '赋能组成部分方法',
	title: '赋能平台的组成',
	parts: [
		{
			imgUrl: empowerment1,
			name: '高灵敏度接收机',
		},
		{
			imgUrl: empowerment2,
			name: '低噪音发射机',
		},
		{
			imgUrl: empowerment3,
			name: '连接器',
		},
		{
			imgUrl: empowerment4,
			name: '高性能天线',
		},
		{
			imgUrl: empowerment5,
			name: '整机系统',
		},
	],
}

export default { banner, advantages, empowerment }
