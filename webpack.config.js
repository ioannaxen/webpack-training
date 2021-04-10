const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)

module.exports = ({ mode } = { mode: 'production' }) =>
  webpackMerge(
    {
      mode,
      output: {
        filename: 'bundle.js',
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  )
