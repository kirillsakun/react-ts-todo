const INDENT_RULE = [1, 'tab'];

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'no-unused-vars': 0,
		'linebreak-style': 0,
		'no-multiple-empty-lines': [1, { max: 2 }],
		indent: INDENT_RULE,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': INDENT_RULE,
		'react/jsx-indent-props': INDENT_RULE,
		'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
		'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
		// may there is a better way to get rid of next errors
		'import/no-unresolved': 0,
		'import/extensions': [
			0,
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
