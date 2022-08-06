module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'xo',
		'xo-react',
		'xo-typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/all'
	],
	plugins: [
		'react',
		'react-hooks',
		'simple-import-sort',
		'unicorn',
		'@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2022,
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		'@typescript-eslint/comma-dangle': ['error', 'never'],
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'default',
			leadingUnderscore: 'allow',
			format: [
				'strictCamelCase',
				'StrictPascalCase',
				'snake_case'
			]
		}],
		'@typescript-eslint/object-curly-spacing': ['error', 'always'],
		'@typescript-eslint/semi': ['error', 'never'],
		'array-callback-return': 'error',
		eqeqeq: ['error', 'always'],
		indent: ['error', 'tab', {
			offsetTernaryExpressions: true
		}],
		'newline-per-chained-call': ['error', {
			ignoreChainWithDepth: 1
		}],
		'comma-dangle': ['error', 'never'],
		'no-implicit-coercion': 'error',
		'no-spaced-func': 'error',
		'no-unused-vars': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'object-curly-spacing': ['error', 'always'],
		'object-shorthand': ['error', 'always'],
		'prefer-const': ['error', {
			destructuring: 'all'
		}],
		'prefer-template': 'error',
		quotes: ['error', 'single', {
			allowTemplateLiterals: true
		}],
		semi: ['error', 'never'],
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/no-anonymous-default-export': 'off',
		'react/no-unknown-property': ['error', {
			ignore: ['class', 'for']
		}],
		'unicorn/filename-case': ['error', {
			cases: {
				pascalCase: true,
				camelCase: true,
				snakeCase: true
			}
		}],
		'unicorn/no-abusive-eslint-disable': 'off',
		'unicorn/no-useless-undefined': ['error', {
			checkArguments: false
		}]
	}
}
