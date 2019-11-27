import bannerImg from './accurate-locating-banner.jpg'

import coreCompetitiveness1 from './core-competitiveness-1.png'
import coreCompetitiveness2 from './core-competitiveness-2.png'

import systemComposition1 from './system-composition-1.jpg'
import systemComposition2 from './system-composition-2.jpg'
import systemComposition3 from './system-composition-3.jpg'
import systemComposition4 from './system-composition-4.jpg'

import applicationScenario1 from './application-scenario-1.jpg'
import applicationScenario2 from './application-scenario-2.jpg'
import applicationScenario3 from './application-scenario-3.jpg'
import applicationScenario4 from './application-scenario-4.jpg'

/**
 * 精准定位系统整个页面的配置
 */

export const banner = {
	title: '精准定位系统',
	imgUrl: bannerImg,
}
export const coreCompetitiveness = {
	title: '核心竞争力',
	imgUrls: [coreCompetitiveness1, coreCompetitiveness2],
	slogan: '优异的定位性能，定位精度高达 2mm',
}
export const systemComposition = {
	title: '系统组成',
	imgUrl: systemComposition1,
	features: [
		{ icon: systemComposition2, name: '高性能天线' },
		{
			icon: systemComposition3,
			name: '高灵敏度接收机',
		},
		{
			icon: systemComposition4,
			name: '核心算法',
		},
	],
}
export const applicationScenario = {
	title: '应用场景',
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
