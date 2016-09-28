const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack           = require('webpack');

module.exports = {
  entry  : './src/index.js',
  output : {
    path     : './',
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.json$/,
        loader : 'json-loader'
      },
      {
        test   : /\.css$/,
        loader : ExtractTextPlugin.extract(
          'style-loader',
          'css-loader'
        )
      },
      {
        test    : /\.scss$/,
        loaders : ["style", "css", "sass"]
      },
      {
        test    : /\.jsx$/,
        loader  : 'jsx-loader?insertPragma=React.DOM&harmony',
        exclude : /node_modules/
      },
      {
        test    : /\.(jsx|js)$/,
        loader  : 'babel-loader',
        query   : {
          presets : [
            'es2015',
            'react'
          ]
        },
        exclude : /node_modules/
      },
      {
        test   : /\.(woff|woff2)(\?v =\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test   : /\.ttf(\?v =\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test   : /\.eot(\?v =\d+\.\d+\.\d+)?$/,
        loader : 'file'
      },
      {
        test   : /\.svg(\?v =\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=10000&mimetype=image/svg+xml'
      },
      {
        test    : /\.(jpe?g|png|gif|svg)$/i,
        loaders : [
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : './src/index.html',
      inject   : true
    }),
    new webpack.ProvidePlugin({
      React : 'react'
    }),
    new ExtractTextPlugin('[name].css')
  ]
};
