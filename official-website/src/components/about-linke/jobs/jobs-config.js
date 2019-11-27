/**
 * 职位的配置
 */

export const jobs = [
	{
		name: '前端开发工程师',
		location: '珠海',
		responsibilities: [
			'负责各业务平台的前端网页、网站开发与维护',
			'根据UI设计，构建网页和页面交互逻辑',
			'适配后端程序接口，完成业务逻辑',
		],
		requirements: [
			'本科或以上学历，计算机相关专业',
			'熟练掌握Javascript,熟悉ES2015规范',
			'熟练掌握Angular/React/Vue中的一个或多个框架',
			'熟悉响应式布局的原理和实现方法',
			'了解一些常见的网页开发相关的框架和工具，如webpack，babel，sass/scss等',
			'具有较强的学习能力，热衷前沿技术',
		],
	},
	{
		name: '后端开发工程师',
		location: '珠海',
		responsibilities: [
			'负责各业务平台的后端服务器程序开发与维护',
			'负责和前端、客户端开发，协商，制定后端接口协议',
			'负责后端程序的性能调优、压力测试等',
		],
		requirements: [
			'本科或以上学历，计算机相关专业',
			'熟悉关系数据库产品，如mysql，掌握数据库优化技巧',
			'熟悉NodeJS，熟练掌握Javascript，熟悉ES2015规范',
			'了解常见的NodeJS框架，如lodash/ramda，express/koa，socket.io者优先',
			'了解redis，mongodb者优先',
			'熟悉docker操作者优先',
			'掌握linux基本操作',
		],
	},
	{
		name: '测试开发工程师',
		location: '珠海',
		responsibilities: [
			'开发和维护自动化测试工具和框架',
			'持续集成测试自动化研发',
			'编写测试用例、测试方案和测试报告',
		],
		requirements: [
			'一年以上自动化相关开发经验',
			'熟悉常见自动化测试框架，如Selenium, Appium',
			'熟悉常见的数据库产品，如mysql, mongodb, redis',
			'了解持续集成产品，如travis-ci, codeship',
			'熟悉NodeJS、Python、Go者优先',
			'掌握linux基本操作',
		],
	},
	{
		name: '产品经理',
		location: '珠海',
		responsibilities: [
			'根据公司规划，形成产品需求，并开展产品定义设计工作',
			'协助销售人员完成项目前期销售工作，并收集用户反馈不断改进产品',
		],
		requirements: [
			'本科及以上学历，计算机、通信、电子等相关专业，3年以上相关工作经验',
			'熟练掌握互联网产品定义、设计的过程和相关工具的使用',
			'熟悉主流Web和手机App的设计理念',
			'具有良好的沟通协调能力、数据分析能力、持续改进能力',
			'有运营商业务经验的优先',
			'熟练使用办公软件，具有良好的写作表达能力',
		],
	},
]

export const title = {
	location: '工作地点：',
	responsibility: '职位职责：',
	requirement: '职位要求：',
	application: '申请职位',
}

export default { jobs, title }
