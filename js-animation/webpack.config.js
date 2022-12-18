/**
 * Created by Capricorncd 2018/1/20
 * https://github.com/xing1984
 * https://github.com/capricorncd
 */
const { resolve } = require('path')

module.exports = {
  entry: {
    animation: './src/animation.js'
  },
  output: {
    path: resolve(__dirname, '../../xing1984.github.io/demos/js-animation'),
    path: __dirname + '/dist',
    filename: '[name].js',
    library: 'animation',
    libraryTarget: 'umd'
  }
}
