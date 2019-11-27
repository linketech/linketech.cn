module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['airbnb-base', 'plugin:react/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	plugins: ['react'],
	rules: {
		semi: ['error', 'never'],
		indent: ['error', 'tab', { SwitchCase: 'warn' }],
		'no-tabs': 'off',
		'no-console': 'off',
		'no-restricted-syntax': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'dot-notation': ['error', { allowPattern: '^[A-Za-z_]+$' }],
		'arrow-parens': ['error', 'always'],
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [
					'render',
					'getInitialState',
					'getDefaultProps',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount',
				],
			},
		],
	},
}
