import bannerImg from './wireless-router-banner.jpg'

import icon1 from './icon-1.png'
import icon2 from './icon-2.png'
import icon3 from './icon-3.png'
import icon4 from './icon-4.png'
import icon5 from './icon-5.png'

import background1 from './background-1.jpg'
import background2 from './background-2.jpg'

/**
 * 高性能无线路由器整个页面的配置
 */

export const banner = {
	title: '高性能无线路由器',
	imgUrl: bannerImg,
}

/**
 * 每个特性都是一个对象，有三个属性：
 * @name {string} 特性名称
 * @benifits {array[]} 优势文案数组
 * @icon {image} 对应图标
 * @background {string || image} 背景颜色或背景图,背景为图片时文字用浅色
 * @align {boolean} 文字对齐方向, true 为左对齐(文字在左图标在右)
 */
export const features = [
	{
		name: '高灵敏度接收机',
		benefits: ['有效的降低对发射端信号功率的需求', '减小对人体辐射影响'],
		icon: icon1,
		background: '#fff',
		align: true,
	},
	{
		name: '高性能WHEMS天线',
		benefits: [
			'在频宽、增益、效率、无源互调、隔离度',
			'等方面达到更优异的性能 ',
		],
		icon: icon2,
		background: '#eff1f5',
		align: false,
	},
	{
		name: '稳定可靠的性能',
		benefits: [
			'不依赖经验主义和试错',
			// '短时间内做到无线产品的极限性能',
			'减少研发周期，降低成本',
			'产品更稳定可靠',
		],
		icon: icon3,
		background: background1,
		align: true,
	},
	{
		name: '无线MESH组网',
		benefits: ['使用多个路由器的情况下', '得到平滑的无缝切换体验'],
		icon: icon4,
		background: '#fff',
		align: false,
	},
	{
		name: '游戏加速',
		benefits: ['时延低，空口时延小于3ms'],
		icon: icon5,
		background: background2,
		align: true,
	},
]

export default { banner, features }
