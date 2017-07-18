const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index',
  ],

  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html',
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
  ],

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
