/* eslint-env node */

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',

		'no-undef': 'error',
		'no-unreachable': 'error',
		'semi': [2, 'never'],
		"no-unused-vars": "off",//["warn", { "argsIgnorePattern": "^_" }],
		"react-hooks/exhaustive-deps": 'off',
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
		'@typescript-eslint/class-name-casing': 'off',
		'@typescript-eslint/no-unused-expressions': ['warn', { 'allowShortCircuit': true }],
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/array-type': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false
			}
		],

		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/no-unsafe-argument': 'warn',

		'@typescript-eslint/no-empty-function': 'off',

		'no-restricted-syntax': 'off',
		'no-use-before-define': 'off',
		'import/extensions': 'off',
		'array-callback-return': 'off',
		'import/prefer-default-export': 'off',
		'max-len': [
			'error',
			{
				code: 1000,
				tabWidth: 4
			}
		],
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'import/no-unresolved': 'off',
		'consistent-return': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		'sx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'react/jsx-props-no-spreading': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'no-prototype-builtins': 'off',
		'no-nested-ternary': 'off',
		'comma-dangle': 'off',
		'prettier/prettier': [0, { endOfLine: 'auto' }],
		'react/jsx-filename-extension': [0]
	}
}