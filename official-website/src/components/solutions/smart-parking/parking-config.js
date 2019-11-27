import bannerImg from './smart-parking-banner.jpg'

import coreCompetitiveness1 from './core-competitiveness-1.png'
import coreCompetitiveness2 from './core-competitiveness-2.png'

import systemComposition1 from './system-composition-1.png'
import systemComposition2 from './system-composition-2.png'
import systemComposition3 from './system-composition-3.png'
import systemComposition4 from './system-composition-4.png'

import applicationScenario1 from './application-scenario-1.jpg'
import applicationScenario2 from './application-scenario-2.jpg'

/**
 * 智慧停车系统整个页面的配置
 */

export const banner = {
	title: '智慧停车系统',
	imgUrl: bannerImg,
	videoUrl:
		'https://staticsmart-iovnet-18q0uddqn.now.sh/linketech-website/smart-parking-03.07.mp4',
}
export const coreCompetitiveness = {
	title: '核心竞争力',
	imgUrls: [coreCompetitiveness1, coreCompetitiveness2],
	slogan:
		'自主研发的毫米波雷达 + 地磁双模传感器，掌握核心算法，检测准确率 > 99%',
}
export const systemComposition = {
	title: '系统组成',
	features: [
		{ icon: systemComposition1, name: '5G NB-IoT 双模车位传感器' },
		{ icon: systemComposition2, name: '用户端公众号 / 小程序 / APP' },
		{ icon: systemComposition3, name: '管理端巡检终端 / 管理后台' },
	],
	imgUrl: systemComposition4,
}
export const applicationScenario = {
	title: '应用场景',
	imgs: [
		{
			Url: applicationScenario1,
			name: '停车指引',
		},
		{
			Url: applicationScenario2,
			name: '路边停车收费',
		},
	],
}

export default {
	banner,
	coreCompetitiveness,
	systemComposition,
	applicationScenario,
}
