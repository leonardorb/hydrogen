// main: 'index.html' when going to production
// webpack --progress -p

const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'font-awesome-loader',
    'bootstrap-loader',
    'webpack-dev-server/client?http://localhost:8080',
    './src/js/app.js'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/build',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /bootstrap-sass\/assets\/javascripts\//,
      loader: 'imports?jQuery=jquery'
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url'
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
}