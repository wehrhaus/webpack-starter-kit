const confPlugins = require('./webpack.plugins');

module.exports = [
  {
    test: /\.html$/,
    loader: 'raw-loader'
  },

  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015']
    }
  },

  {
    test: /\.scss$/,
    loader: confPlugins.extractSass.extract({
      use: [{
        loader: 'css-loader', options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader', options: {
          sourceMap: true
        }
      }],
      fallback: 'style-loader'
    })
  }
];
