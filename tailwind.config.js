const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true
  },
  theme: {
    clear: [],
    float: [],
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
