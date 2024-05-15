import es from '@eslint/js'
import eslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import unicorn from 'eslint-plugin-unicorn'
import stylistic from '@stylistic/eslint-plugin'
import gitignore from 'eslint-config-flat-gitignore'
import sorter from 'eslint-plugin-simple-import-sort'

export default eslint.config(
	gitignore(),
	es.configs.recommended,
	...eslint.configs.recommendedTypeChecked,
	...eslint.configs.strictTypeChecked,
	...eslint.configs.stylisticTypeChecked,
	unicorn.configs['flat/recommended'],
	stylistic.configs.customize({
		braceStyle: '1tbs',
		indent: 'tab'
	}),
	{
		rules: {
			'import-sort/imports': 'error',
			'import-sort/exports': 'error'
		},
		plugins: {
			'import-sort': sorter
		}
	},
	// https://github.com/facebook/react/issues/28313
	{
		rules: {
			...hooks.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			'react/no-unknown-property': ['error', {
				ignore: ['class', 'for']
			}],
		},
		plugins: {
			'react': react,
			'react-hooks': hooks
		}
	},
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				ecmaFeatures: {
					jsx: true
				}
			}
		},
	}, 
	{
		rules: {
			'unicorn/filename-case': 'off',
			'unicorn/import-style': 'off',
			'unicorn/no-abusive-eslint-disable': 'off',
			'unicorn/no-null': 'off',
			'unicorn/no-useless-undefined': ['error', {
				checkArguments: false
			}],
			'unicorn/prevent-abbreviations': 'off',
		}
	},
	{
		rules: {
			'@stylistic/function-call-spacing': 'error',
			'@stylistic/newline-per-chained-call': ['error', {
				ignoreChainWithDepth: 2
			}]
		}
	},
	{
		rules: {
			'array-callback-return': 'error',
			'eqeqeq': ['error', 'always'],
			'no-implicit-coercion': 'error',
			'no-empty': ['error', {
				allowEmptyCatch: true
			}],
			'no-var': 'error',
			'object-shorthand': ['error', 'always'],
			'prefer-const': ['error', {
				destructuring: 'all'
			}],
			'prefer-template': 'error',
		}
	}
)

