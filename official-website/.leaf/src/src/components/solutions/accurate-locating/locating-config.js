import bannerImg from './accurate-locating-banner.jpg'

import coreCompetitiveness1 from './core-competitiveness-1.jpg'
import coreCompetitiveness2 from './core-competitiveness-2.jpg'
import coreCompetitivenessLocatingProduct from './locating-product.jpg'

import systemCompositionBackground from './system-composition-background.jpg'
import systemComposition2 from './system-composition-1.png'
import systemComposition3 from './system-composition-2.png'
import systemComposition4 from './system-composition-3.png'

import descriptLocationWhite from './location-white.jpg'

import applicationScenario1 from './application-scenario-1.png'
import applicationScenario2 from './application-scenario-2.png'
import applicationScenario3 from './application-scenario-3.png'
import applicationScenario4 from './application-scenario-4.png'
import applicationScenarioBackground from './application-scenario-background.jpg'

/**
 * 精准定位系统整个页面的配置
 */

export const banner = {
	title: '形变监测系统',
	imgUrl: bannerImg,
}
export const coreCompetitiveness = {
	title: '核心竞争力',
	schematicUrl:coreCompetitivenessLocatingProduct,
	imgUrls: [coreCompetitiveness1, coreCompetitiveness2],
	slogan: '优异的定位性能，定位精度高达2mm',
	summary:'领翌正致力于研发超高精度定位系统（定位精度2mm)，使用北斗/GPS双模导航芯片，信号接收灵敏度达到-160dBm。整体产品完全自主知识产权，未来可广泛应用在桥梁、铁路、楼宇等结构安全检测领域',
	 
}
export const systemComposition = {
	title: '系统组成',
	imgUrl: systemCompositionBackground,
	features: [
		{
			 icon: systemComposition2, 
			 name: '高精度',
			 subname: '采用原创紧耦合无线收发机理论设计及噪声优化，定位精度达到2毫米'
		},
		{
			icon: systemComposition3,
			name: '低成本',
			subname:'创新的产品设计，让民用级别的产品芯片也能达到仪器级别的产品芯片水平，成本降低10倍'
		},
		{
			icon: systemComposition4,
			name: '创新算法',
			subname:'完全自主知识产权的创新算法，即使在单频信号的环境下，也同样能进行精密测量'
		},
	],
}

export const scenarioDescript = {
	img:descriptLocationWhite,
	descripts:[
		'以紧耦合无线收发机理论为核心技术，使用支持单频解算的RTK算法，结合精准时钟同步技术，降低卫星导航芯片的性能要求，实现毫米级精密测量',
		'在使用国产北斗/GPS双模导航芯片的基础下，信号接收灵敏度达到-160dBm，同时通过对天线接收机的优化设计，识别并消除多径信号的干扰',
		'应用场景广泛，可适用于电力塔检测、港口精准物流、高铁地基检测和楼宇沉降检测等系统中',
	]
}

export const applicationScenario = {
	title: '应用场景',
	background:applicationScenarioBackground,
	imgs: [
		{
			Url: applicationScenario1,
			name: '楼宇监测',
		},
		{
			Url: applicationScenario2,
			name: '电力塔监测',
		},
		{
			Url: applicationScenario3,
			name: '高铁地基监测',
		},
		{
			Url: applicationScenario4,
			name: '桥梁监测',
		},
	],
}

export default {
	banner,
	coreCompetitiveness,
	systemComposition,
	applicationScenario,
}
