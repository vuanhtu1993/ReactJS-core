module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-string-refs': 'off',
    'no-unused-vars': 'off',
    'no-tabs': 'off',
    'no-plusplus': 'off',
  }
};
