
import bannerImg from './uu-banner.jpg'
import uuExperienceImg from './uu-experience-img.jpg'
import uuExperienceIcon1 from './uu-experience-icon-1.png'
import uuExperienceIcon2 from './uu-experience-icon-2.png'
import uuExperienceIcon3 from './uu-experience-icon-3.png'

import uuBoxFeaturesListBackground from './uu-feature-background.jpg'

import uuBoxFeatureIcon1 from './uu-feature-icon-1.png'
import uuBoxFeatureIcon2 from './uu-feature-icon-2.png'
import uuBoxFeatureIcon3 from './uu-feature-icon-3.png'

export const uuBanner = {
	title: 'UU加速盒',
	imgUrl: bannerImg,
}

export const uuBoxFeatures = {
	title: '极速游戏   畅快体验',
	summary: '独家为网易游戏赋能的加速器，支持三大主机并且采用自有知识产权的WHEMS天线，解决产品运行时延时、卡机、掉线等问题',
	imgUrl: uuExperienceImg,
	features: [
		uuExperienceIcon1,uuExperienceIcon2,uuExperienceIcon3
    ],
    slogan:'为三大主机PS4、 Switch、 Xbox One提供加速'
}

export const uuBoxFeaturesList = {
	background: uuBoxFeaturesListBackground,
	features:[
		{icon:uuBoxFeatureIcon1,name:'速度快',desc:'优化芯片布局，让产品在高于工作温度15℃的环境下也能保持高效运行'},
		{icon:uuBoxFeatureIcon2,name:'更稳定',desc:'高性能接收机，灵敏度接近芯片极限，抗干扰能力强，在复杂的环境也不用担心网丢包'},
        {icon:uuBoxFeatureIcon3,name:'广覆盖',desc:'自有知识产权的WHEMS高性能天线，用更小的体积，获得更大的覆盖范围，整体覆盖多20%'},
    ]
}