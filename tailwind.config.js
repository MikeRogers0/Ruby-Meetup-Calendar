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
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem'
    },
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
