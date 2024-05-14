# eslint-config-tale

> My personal ESLint configuration.

This configuration is very simple and only includes a few rules that I find useful.
I try to follow a lot of the "recommended" rules, with minimal changes on top.
Here's what's included:
- React & JSX/TSX
- Node (CommonJS & ESM)
- Sensible Defaults (ES6+)

## Usage
> This config does not support the legacy `.eslintrc.*` format anymore.
Create an `eslint.config.js` file in your project root with the following:
```js
import tale from 'eslint-config-tale'
export default [
    ...tale,
    {
        // Optional overrides if you need them
    }
]
```
