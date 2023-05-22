module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'google',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'@typescript-eslint',
	],
	'rules': {
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'no-tabs': 'off',
		'max-len': 'off',
		'object-curly-spacing': 'off',
		'require-jsdoc': 'off',
		'valid-jsdoc': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-unused-vars': 'warn',
		'no-invalid-this': 'off',
		'new-cap': 'off',
		'no-array-constructor': 'off',
		'guard-for-in': 'off',
		'no-multi-spaces': 'off',
		'padded-blocks': 'off',
		'arrow-parens': 'off',
		'linebreak-style': 'off',
	},
};
