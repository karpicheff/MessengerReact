const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname),
    port: 8080,
    publicPath: path.resolve(__dirname, 'static_src'),
    filename: 'app.js',
    hot: true
  },
  entry: {
    app: './index.jsx',
  },
  context: path.resolve(__dirname, 'static_src'),
  output: {
    path: path.resolve(__dirname, 'static', 'build'),
    filename: 'app.js',
    publicPath: path.resolve(__dirname, 'static', 'build'),
  },
  module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'static_src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    }
};
