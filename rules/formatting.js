module.exports = {
  'array-bracket-newline': ['error', {
    minItems: 2,
    multiline: true,
  }],
  'array-bracket-spacing': ['error', 'always', {
    arraysInArrays: false,
    objectsInArrays: false,
  }],
  'array-element-newline': ['error', {
    minItems: 2,
    multiline: true,
  }],
  'arrow-spacing': ['error', {
    after: true,
    before: true,
  }],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs'],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', {
    after: true,
    before: false,
  }],
  'comma-style': ['error', 'last'],
  'computed-property-spacing': ['error', 'never'],
  'dot-location': ['error', 'property'],
  'eol-last': ['error', 'always'],
  'func-call-spacing': ['error', 'never'],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'multiline'],
  'generator-star-spacing': ['error', {
    after: false,
    before: true,
  }],
  'implicit-arrow-linebreak': ['error', 'beside'],
  'indent': ['error', 2, {
    SwitchCase: 1,
  }],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', {
    afterColon: true,
    beforeColon: false,
    mode: 'strict',
  }],
  'keyword-spacing': ['error', {
    before: true,
    after: true,
  }],
  'line-comment-position': ['error', {
    position: 'above',
  }],
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': ['error', {
    beforeBlockComment: true,
    ignorePattern: 'webpack'
  }],
  'lines-between-class-members': ['error', 'always'],
  'max-len': ['error', {
    code: 80,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreUrls: true,
    tabWidth: 2,
  }],
  'max-statements-per-line': ['error', {
    max: 1,
  }],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-parens': ['error', 'always'],
  // Doesn't enforce newline per chained call, just those over limit
  'newline-per-chained-call': 'off',
  'no-extra-parens': ['error', 'all'],
  'no-multi-spaces': ['error', {
    exceptions: {
      Property: false,
    },
  }],
  'no-multiple-empty-lines': ['error', {
    max: 1,
    maxBOF: 0,
    maxEOF: 0,
  }],
  'no-tabs': ['error', {
    allowIndentationTabs: false,
  }],
  'no-trailing-spaces': ['error', {
    ignoreComments: false,
    skipBlankLines: false,
  }],
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': ['error', 'beside'],
  'object-curly-newline': ['error', {
    consistent: true,
    minProperties: 2,
    multiline: true,
  }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: false,
  }],
  'operator-linebreak': ['error', 'after', {
    overrides: {
      ':': 'before',
      '?': 'before',
    },
  }],
  'padded-blocks': ['error', 'never', {
    allowSingleLineBlocks: false,
  }],
  // Sets line rules between given statements, does not depend on multiline
  'padding-line-between-statements': 'off',
  'quotes': ['error', 'single', {
    allowTemplateLiterals: true,
  }],
  'rest-spread-spacing': ['error', 'never'],
  'semi': ['error', 'never'],
  'semi-spacing': ['error', {
    after: false,
    before: false,
  }],
  'semi-style': 'off',
  'space-before-blocks': ['error', 'always'],
  'space-before-function-paren': ['error', 'never'],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error', {
    int32Hint: false,
  }],
  'space-unary-ops': ['error', {
    nonwords: false,
    words: true,
  }],
  'switch-colon-spacing': ['error', {
    after: true,
    before: false,
  }],
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'always'],
  'unicode-bom': ['error', 'never'],
  // Unsure of significance
  'wrap-iife': 'off',
  'wrap-regex': 'error',
  'yield-star-spacing': ['error', {
    after: true,
    before: false,
  }]
}
