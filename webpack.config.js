const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
})
