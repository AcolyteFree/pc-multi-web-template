'use strict'
const utils = require('./vue-loader-utils')
// const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = true

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: false
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: true,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
