module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': 'error',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
    'import/extensions': 'off',

    // https://eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': 'off',

    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // https://eslint.org/docs/latest/rules/max-len
    'max-len': 'off',

    // https://eslint.org/docs/latest/rules/no-console
    'no-console': 'error',

    // http://eslint.org/docs/rules/brace-style
    'brace-style': [
      'error',
      '1tbs',
    ],

    // http://eslint.org/docs/rules/camelcase
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        exports: 'never',
        functions: 'always-multiline',
        imports: 'never',
      },
    ],

    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],

    // http://eslint.org/docs/rules/comma-style
    'comma-style': [
      'error',
      'last',
    ],

    // http://eslint.org/docs/rules/curly
    curly: [
      'error',
      'all',
    ],

    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPattern: '^[a-z]+(_[a-z]+)+$',
      },
    ],

    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      'error',
      'always',
    ],

    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': [
      'error',
      'never',
    ],

    // http://eslint.org/docs/rules/id-length
    'id-length': [
      'warn',
      {
        exceptions: ['e', 'i', 'j', '_', '$'],
      },
    ],

    // http://eslint.org/docs/rules/indent
    indent: ['error', 2],

    // eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],

    // http://eslint.org/docs/rules/new-cap
    'new-cap': [
      'error',
      {
        capIsNew: false,
      },
    ],

    // http://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // http://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 'error',

    // http://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': [
      'error',
      'smart-tabs',
    ],

    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],

    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    // http://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'error',

    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'all',
        vars: 'all',
      },
    ],

    // http://eslint.org/docs/rules/no-void
    'no-void': 'error',

    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'error',

    // https://eslint.org/docs/latest/rules/object-curly-spacing
    'object-curly-spacing': [ 'error', 'always' ],

    // http://eslint.org/docs/rules/one-var
    'one-var': [
      'error',
      'never',
    ],

    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 1,

    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',

    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // http://eslint.org/docs/rules/quote-props
    'quote-props': [
      'error',
      'as-needed',
    ],

    // http://eslint.org/docs/rules/quotes
    quotes: [
      'error',
      'single',
    ],

    // http://eslint.org/docs/rules/semi
    semi: [
      'error',
      'always',
    ],

    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [
      'error',
      'always',
    ],

    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': [
      'error',
    ],

    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'error',

    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'ignore',
      },
    ],

    // http://eslint.org/docs/rules/strict
    strict: [
      'error',
      'global',
    ],

    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [
      'error',
      'inside',
    ],
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
};
