import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
    {
        ignores: ['dist', 'node_modules'], // Ignore generated and external directories
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser, // Use TypeScript parser
            ecmaVersion: 2020,
            globals: globals.browser,
            sourceType: 'module', // Ensure module syntax is supported
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
            '@typescript-eslint': tseslint,
            prettier, // Prettier plugin
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/no-autofocus': 'warn',
            'jsx-a11y/alt-text': 'error',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-console': 'warn',
            eqeqeq: ['error', 'always'],
            curly: ['error', 'all'],
            'prefer-const': 'error',
            'no-var': 'error',
            'arrow-body-style': ['error', 'as-needed'],
            'object-shorthand': ['error', 'always'],
            'react/jsx-uses-react': 'off', // For React 17+ JSX runtime
            'react/react-in-jsx-scope': 'off', // For React 17+ JSX runtime
            'react/prop-types': 'off', // Not needed with TypeScript

            // Prettier integration
            'prettier/prettier': [
                'error',
                {
                    semi: false, // Disable semicolon enforcement
                },
            ]
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
            },
        },
    },
];
