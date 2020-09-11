import bannerImg from './wireless-router-banner.jpg'

import merckuRouter from './mercku-router.jpg'
import merckuFeature1 from './mercku-feature-1.png'
import merckuFeature2 from './mercku-feature-2.png'
import merckuFeature3 from './mercku-feature-3.png'

import merckuFeatureListBackground from './mecku-feature-list-background.jpg'
import merckuFeatureList1 from './features-list-1.png'
import merckuFeatureList2 from './features-list-2.png'
import merckuFeatureList3 from './features-list-3.png'
import merckuFeatureList4 from './features-list-4.png'
import merckuFeatureList5 from './features-list-5.png'

import merckuSignalImage from './mercku-signal.jpg'

import merckuProductComparisonTable from './mercku-product-comparison-table.png'

import merckuAwards1 from './mercku-awards-1.png'
import merckuAwards2 from './mercku-awards-2.png'
import merckuAwards3 from './mercku-awards-3.png'
import merckuAwards4 from './mercku-awards-4.png'
import merckuAwards5 from './mercku-awards-5.png'
import merckuAwards6 from './mercku-awards-6.png'
import merckuAwards7 from './mercku-awards-7.png'

import merckuProductComparisonBackground from './product-comparison-background.jpg'


/**
 * 高性能无线路由器整个页面的配置
 */

export const banner = {
	title: 'Mercku路由器',
	imgUrl: bannerImg,
}

export const merckuFeatures = {
	title: '产品特点',
	summary: '为北美Mercku公司赋能的实测速率达到世界领先水平的路由器，各项指标性能接近芯片的理论极限，实测平均下载速率突破720Mbps（业界平均水平为400Mbps）。同时，该路由器斩获包括ces2019最具创新产品奖在内的多个国际大奖',
	imgUrl: merckuRouter,
	features: [
		{ img: merckuFeature1, name: '覆盖广' },
		{ img: merckuFeature2, name: '传输快' },
		{ img: merckuFeature3, name: '信号稳' },
	]
}

export const merckuFeaturesList = {
	background: merckuFeatureListBackground,
	features:[
		{icon:merckuFeatureList1,name:'高灵敏度接收机',desc:'有效的降低对发射端信号功率的需求，减小对人体辐射影响'},
		{icon:merckuFeatureList2,name:'高性能WHEMS天线',desc:'在频宽、增益、效率、无源互调、隔离度等方面达到更优异的性能'},
		{icon:merckuFeatureList3,name:'极致的性能',desc:'不依赖经验主义和试错，短时间内做到无线产品的极限性能减少研发周期，降低成本，产品更稳定可靠'},
		{icon:merckuFeatureList4,name:'无线MESH组网',desc:'使用多个路由器的情况下得到平滑的无缝切换体验'},
		{icon:merckuFeatureList5,name:'游戏加速',desc:'时延低，空口时延小于3ms'},
	]
}

export const merckuSignal = {
	productImage:merckuSignalImage,
	title:'信号穿墙无盲点',
	desc:'1个路由器+4个中继器可覆盖约500平方米,有效解决大户型信号覆盖问题以及复式楼信号跃层问题，扫除房间信号盲点',
}

export const productComparison = {
	background:merckuProductComparisonBackground,
	title:'产品对比',
	table:merckuProductComparisonTable,
	slogan:'(以上测试数据由第三方提供)',

}


export const merckuHonor = {
	title:'荣获多项国际大奖',
	awards:[merckuAwards1,merckuAwards2,merckuAwards3,merckuAwards4,merckuAwards5,merckuAwards6,merckuAwards7]
}


export default { banner }
