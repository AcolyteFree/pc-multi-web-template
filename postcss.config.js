module.exports = {
  plugins: [
  	require("autoprefixer")(),
    require('postcss-apply')(),
	  require('postcss-custom-properties')(),
	  require('postcss-custom-media')(),
	  require('postcss-custom-selectors'),
	  require('postcss-nesting')(),
	  require('postcss-image-set-polyfill')(),
	  require('postcss-color-function'),
	  require('pixrem')(),
	  require('postcss-selector-matches')(),
	  require('postcss-font-family-system-ui')()
	]
}
