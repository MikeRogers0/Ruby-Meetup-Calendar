module.exports = {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      importFrom: [
        './frontend/styles/config/breakpoints.json',
        './frontend/styles/config/colours.css',
        './frontend/styles/config/fonts.css',
        './frontend/styles/config/spacing.css',
      ],
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 1
    },
  }
}
