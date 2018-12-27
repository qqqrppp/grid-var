module.exports = {
  plugins: [
    require('stylelint'),
    require('postcss-each'),
    require('precss'),
    require('postcss-cssnext')({
      features: {
        customProperties: false
      }
    }),
    require('cssnano'),
  ]
}