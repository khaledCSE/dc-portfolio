module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": [
    'airbnb-base',
    'airbnb-typescript/base',
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    'no-continue': 'off',
    'no-mixed-operators': 'off',
    'import/no-cycle': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-floating-promises': 2,
    'import/no-named-as-default': 0,
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/camelcase': 'off',
    "eol-last": 1,
    "max-len": ["error", {
      "code": 170,
      "ignoreComments": true,
      "ignoreUrls": true
    }]
  }
}
