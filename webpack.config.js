const path = require('path');
const confLoaders = require('./conf/webpack.loaders');
const confPlugins = require('./conf/webpack.plugins');

module.exports = {

  devtool: 'source-map',

  devServer: {
    port: process.env.PORT || 8080,
    contentBase: './dist',
    hot: process.env.NODE_ENV === 'development' ? true : false
  },

  entry: {
    app: ['./src/scripts/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: confLoaders
  },

  plugins: [
    confPlugins.definePlugin,
    confPlugins.extractSass,
    confPlugins.hotModuleReplacement,
    confPlugins.htmlWebpack,
    confPlugins.namedModules,
    confPlugins.uglifyJs
  ]
};
