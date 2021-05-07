module.exports = {
  plugins: {
    'postcss-import-ext-glob': {},
    'postcss-flexbugs-fixes': {},
    'postcss-mixins': {
      mixinsDir: './frontend/styles/mixins/'
    },
    'postcss-nested': {},
    'postcss-preset-env': {
      importFrom: [
        './frontend/styles/variables/breakpoints.json',
        './frontend/styles/variables/colours.css',
        './frontend/styles/variables/fonts.css',
        './frontend/styles/variables/spacing.css',
      ],
      stage: 1
    },
  }
}
