module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    // import
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'sort-imports': 0,

    // prettier
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info', 'table']
      }
    ],

    'import/no-named-as-default-member': 0,

    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/await-thenable': 0,
    '@typescript-eslint/unbound-method': 0
  }
}
