module.exports = {
  env: {
    node: !0,
    commonjs: !0,
    es2021: !0,
  },
  extends: [
    //
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'no-console': 'off',
  },
};
