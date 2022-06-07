import { readFile } from 'node:fs/promises'
import { defineConfig } from 'tsup'

const license = await readFile('LICENSE', 'utf8')
const header = license.split('\n').map(line => `// ${line}`).join('\n')

export default defineConfig({
	banner: {
		js: header
	},
	clean: true,
	entry: ['./eslint.ts'],
	format: [
		'cjs',
		'esm'
	],
	platform: 'node',
	target: 'node16'
})
