const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  definePlugin: new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),

  extractSass: new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
  }),

  hotModuleReplacement: new webpack.HotModuleReplacementPlugin(),

  htmlWebpack: new HtmlWebpackPlugin({
    template: './src/index.html'
  }),

  namedModules: new webpack.NamedModulesPlugin(),

  uglifyJs: new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    },
    disable: process.env.NODE_ENV === 'development'
  })
};
