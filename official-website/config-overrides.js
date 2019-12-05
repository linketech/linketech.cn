const { override, fixBabelImports } = require('customize-cra')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path')

// module.exports = function override(config, env) {
// 	// do stuff with the webpack config...
// 	return config
// }

const addConfigPlugin = (config, env) => {
	if (env === 'production') {
		config.plugins = config.plugins.concat([
			new PrerenderSPAPlugin({
				routes: [
					'/',
					'/home',
					'/core-tech',
					'/smart-parking',
					'/accurate-locating',
					'/wireless-router',
					'/about/introduction',
					'/about/news',
					'/about/jobs',
					'/about/contact',
				],
				staticDir: path.join(__dirname, 'build'),
			}),
		])
	}

	return config
}

module.exports = override(
	addConfigPlugin,
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
)
