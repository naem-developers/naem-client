module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': ['error', {variables: false}],
    'react/jsx-filename-extension': [
      2,
      // eslint-disable-next-line object-curly-spacing
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
  },
};
