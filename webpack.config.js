'use strict'

const autoprefixer = require('autoprefixer')
const path = require('path')
const webpack = require('webpack')

let config = {
  devtool: '#eval-source-map',
  entry: {
    build: path.join(__dirname, 'src/main.js')
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  postcss () { return [autoprefixer] },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
}

module.exports = config
