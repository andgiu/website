'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{from:'src/shaders', to:'shaders'}]),
    //new CopyWebpackPlugin([{from:'src/fonts', to:'fonts'}]),
    //new CopyWebpackPlugin([{from:'src/audio', to:'audio'}]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  postLoaders: [
    {
      include: path.resolve(__dirname, 'node_modules/pixi.js'),
      loader: 'transform?brfs'
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.webm$|\.mp3$/i,
        loader: 'file'
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      },
      { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=src/fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=src/fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=src/fonts/[name].[ext]' },
      { test: /\.otf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=src/fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=src/fonts/[name].[ext]' }
    ]
  }
};
