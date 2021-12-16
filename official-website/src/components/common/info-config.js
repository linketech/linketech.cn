import iconHotline from './side-affix/icon-hotline.png'
import iconQQ from './side-affix/icon-qq.png'
import iconQRcode from './side-affix/icon-qrcode.png'
import iconLink from './side-affix/icon-link.png'
import iconGotop from './side-affix/icon-gotop.png'

import QRcode from './QRcode.png'

/**
 * 页脚公司信息的配置
 */

//  领翌的座机
const hotlineTel = '0756-8821252'

export default {
	email: 'hr@linketech.cn',
	// fax: '(86)756-8821252',
	hotlineTel,
	address: '广东省珠海市横琴新区环岛东路1889号创意谷21栋101-102室',
	// copyright: `©2018-${new Date().getFullYear()}`,
	company: 'LinkE Technologies(Hengqin) Co., Ltd.',
	// TODO: 备案号可能会改
	ICP: '粤ICP备19162314号',
	icons: [
		{
			name: '热线电话',
			imgUrl: iconHotline,
			detail: hotlineTel,
		},
		{
			name: 'QQ',
			imgUrl: iconQQ,
		},
		{
			name: '二维码',
			imgUrl: iconQRcode,
			detail: QRcode,
		},
		{
			name: '友情链接',
			imgUrl: iconLink,
		},
		{
			name: '回到顶部',
			imgUrl: iconGotop,
		},
	],
	QRcode,
	slogan: '无线赋能+无限可能',
}
