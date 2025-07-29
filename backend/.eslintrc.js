module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  plugins: ['node', 'security'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    // General
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-var': 'error',

    // Node.js specific
    'node/no-unpublished-require': 'off',
    'node/no-missing-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-promises/fs': 'error',
    'node/prefer-promises/dns': 'error',

    // Security
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'warn',
    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'warn',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'warn',
    'security/detect-non-literal-require': 'warn',
    'security/detect-possible-timing-attacks': 'warn',
    'security/detect-pseudoRandomBytes': 'error',

    // Best practices
    eqeqeq: 'error',
    curly: 'error',
    'no-throw-literal': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-await-in-loop': 'warn',
    'prefer-promise-reject-errors': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', '**/tests/**/*.js'],
      env: {
        jest: true,
      },
      rules: {
        'node/no-unpublished-require': 'off',
        'security/detect-non-literal-fs-filename': 'off',
      },
    },
  ],
};
