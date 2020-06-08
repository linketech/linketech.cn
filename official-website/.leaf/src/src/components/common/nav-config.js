/**
 * 首页导航栏的配置
 *
 * 注意页眉和页脚都用到了该配置
 *
 * 每个菜单项都是一个对象，有三个属性：
 * @name {string} 菜单项名称
 * @href {string} 菜单项对应路由
 * @submenu {array[]} 子级菜单项数组，元素具有 name 和 href 属性
 */
export default [
	{ name: '首页', href: '/home', submenu: [] },
	{ name: '核心技术', href: '/core-tech', submenu: [] },
	{
		name: '产品介绍',
		href: '/smart-parking',
		submenu: [
			{ name: '智慧停车系统', href: '/smart-parking' },
			{ name: '形变监测系统', href: '/accurate-locating' },
			{ name: 'Mercku路由器', href: '/wireless-router' },
			{ name: 'UU加速盒', href: '/uu-box' },
		],
	},
	{
		name: '关于领翌',
		href: '/about/introduction',
		submenu: [
			{ name: '公司介绍', href: '/about/introduction' },
			{ name: '新闻中心', href: '/about/news' },
			{ name: '人才招聘', href: '/about/jobs' },
			{ name: '联系我们', href: '/about/contact' },
		],
	},
]
