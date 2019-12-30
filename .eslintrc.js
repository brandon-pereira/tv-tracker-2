/**
 * Inspired by watson-developer-cloud/node-sdk
 */
module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true
    },
    plugins: ['prettier', 'react', 'react-hooks', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    rules: {
        'prettier/prettier': 'error',
        'no-console': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
