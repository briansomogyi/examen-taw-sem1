import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import pluginPrettier from 'eslint-config-prettier'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-alert': 'error', // Prohibit alert, confirm, and prompt
      quotes: ['error', 'single'], // Enforce single quotes
      'max-len': ['error', { code: 80 }], // Limit line length to 80 characters
      'no-trailing-spaces': 'error', // Remove excess spaces at the end of lines
      'no-var': 'error', // Disallow var, enforce let and const usage
      'eol-last': ['error', 'always'], // Enforce a newline at the end of each file
    },
  },
  pluginVue.configs['flat/strongly-recommended'],
  pluginPrettier,
])
