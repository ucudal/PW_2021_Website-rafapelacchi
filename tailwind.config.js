module.exports = {
  purge: [
    "docs/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors:{
        bgCustom: "ffffff"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
