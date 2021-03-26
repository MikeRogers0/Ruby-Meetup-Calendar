const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true
  },
  corePlugins: {
    clear: false,
    float: false
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    extend: {
      minHeight: {
        '28': '7rem'
        // What are you trying to do here? This doesn't make sense with the documentation: https://tailwindcss.com/docs/min-height#customizing.
      }
    }
  },
  variants: {},
  plugins: [
    // add this line if you use tailwindui
    // require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
  ]
};
