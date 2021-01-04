module.exports = {
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    standardFontWeights: true
  },
  purge: {
    content: [
      "./output/**/*.html",
      "./frontend/**/*.js",
      "./src/**/*.md",
      "./src/**/*.html",
      "./src/**/*.liquid"
    ]
  },
  theme: {
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
    require("@tailwindcss/aspect-ratio")
  ]
};
