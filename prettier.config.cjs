const config = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{json,css,scss,yml,yaml,html}',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
    {
      files: '*.json',
      options: {
        printWidth: 999999,
      },
    },
    {
      files: '*.md',
      options: {
        tabWidth: 4,
      },
    },
  ],
};

module.exports = config;