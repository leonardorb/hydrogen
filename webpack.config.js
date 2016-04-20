const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  
  assets: {
    stats: {
      colors: true
    }
  },
  
  context: __dirname,
  
  devtool: 'cheap-module-source-map',
  
  entry: [
    'font-awesome-loader',
    'bootstrap-loader',
    'webpack-hot-middleware/client',
    './src/js/client/app.js'
  ],
  
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: './',
    filename: 'app.js'
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
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
    extensions: ['', '.js']
  },
  
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }

}