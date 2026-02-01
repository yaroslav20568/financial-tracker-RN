module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before'
          },
          {
            pattern: 'react-native-*',
            group: 'external',
            position: 'before'
          },
          { pattern: '^@app', group: 'internal' },
          { pattern: '^@screens', group: 'internal' },
          { pattern: '^@widgets', group: 'internal' },
          { pattern: '^@features', group: 'internal' },
          { pattern: '^@entities', group: 'internal' },
          { pattern: '^@shared', group: 'internal' },
          { pattern: '^@', group: 'internal' },
          { pattern: '^\\../', group: 'parent' },
          { pattern: '^\\./', group: 'sibling' },
          { pattern: '\\.s?css$', group: 'internal' }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always'
      }
    ]
  }
};
