import bannerImg from './smart-parking-banner.jpg'

import coreCompetitiveness1 from './core-competitiveness-1.jpg'
import coreCompetitiveness2 from './core-competitiveness-2.jpg'
import coreCompetitivenessParking from './core-competitiveness-parking.jpg'
import systemComposition1 from './system-composition-1.png'
import systemComposition2 from './system-composition-2.png'
import systemComposition3 from './system-composition-3.png'
import systemComposition4 from './system-composition-4.png'
import systemCompositionBackground from './system-composition-background.jpg'

import applicationZhuhai from './application-zhuhai.jpg'
import applicationYantai from './application-yantai.jpg'
import applicationChangzhou from './application-changzhou.jpg'
import applicationChengdu from './application-chengdu.jpg'

import detectorIn from './detector-in.png'
import detectorOut from './detector-out.png'
import detectorPartner from './detector-partner.png'

import statusCollectionBackgroundImg from './status-collection-background.jpg'
import statusCollectionSchematicDiagram from './status-collection-schematic-diagram.png'
import coreData from './core-data.png'
import parkingSpaceInfo from './parking-space-info.png'

/**
 * 智慧停车系统整个页面的配置
 */

export const banner = {
	title: '基于5G NB-IoT技术的',
	subtitle: '智慧停车解决方案',
	imgUrl: bannerImg,
	videoUrl:
		'https://staticsmart-iovnet-18q0uddqn.now.sh/linketech-website/smart-parking-03.07.mp4',
}
export const coreCompetitiveness = {
	title: '核心竞争力',
	schematicUrl:coreCompetitivenessParking,
	imgUrls: [coreCompetitiveness1, coreCompetitiveness2],
	summary:'领翌车位检测器采用自主研发的毫米波雷达+地磁双模传感器，掌握核心算法，同步采用NB-IoT技术对车位进行管理，构建客户端及管理平台，将海量的停车位进行数字化智慧管理。目前智慧停车系统已在珠海、烟台、南京、常州、无锡、连云港等地实现业务布局',
	slogan:
		'自主研发的毫米波雷达 + 地磁双模传感器，掌握核心算法，检测准确率 > 99%',
}
export const systemComposition = {
	title: '系统组成',
	backgroundImage:systemCompositionBackground,
	features: [
		{ icon: systemComposition1, name: '5G NB-IoT双模车位传感器',subname: '检测车辆停靠/记录停车时长'},
		{ icon: systemComposition2, name: '用户端公众号/小程序/APP',subname: '车位上标注车位编号/自助缴费/智能终端收费' },
		{ icon: systemComposition3, name: '管理端巡检终端/管理后台' ,subname: '可视化管理/提高巡检人员工作效率'},
		{ icon: systemComposition4, name: '车位伴侣',subname: '蓝牙识别系统/自动读取数据' },
	],
	imgUrl: systemComposition4,
}
export const applicationScenario = {
	title: '应用场景',
	imgs: [
		{
			Url: applicationZhuhai,
			name: '广东珠海',
		},
		{
			Url: applicationYantai,
			name: '山东烟台',
		},
		{
			Url: applicationChangzhou,
			name: '江苏常州',
		},
		{
			Url: applicationChengdu,
			name: '四川成都',
		},
	],
}

export const parkingSpaceDetector = {
	title:'NB-IoT车位检测器',
	features: [
		{icon:detectorIn,name:'地埋式'},
		{icon:detectorOut,name:'贴地式'},
		{icon:detectorPartner,name:'停车伴侣'},
	],
}

export const parkingSpaceStatusCollection = {
	title: '车位状态采集',
	imgUrl:statusCollectionBackgroundImg,
	icon:statusCollectionSchematicDiagram,
	features: [
		{icon:coreData,name:'核心数据'},
		{icon:parkingSpaceInfo,name:'车位信息'}
	],
	slogan:'通过车位检测器采集实时检测车位状态'
}

export default {
	banner,
	coreCompetitiveness,
	systemComposition,
	applicationScenario,
}
