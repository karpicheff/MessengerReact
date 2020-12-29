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
                resolve: {
                  modules: [`${__dirname}/static_src`, 'node_modules'],
                  extensions: ['.js', '.jsx'],
                },
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                       [
                           "@babel/plugin-proposal-class-properties",
                           {
                               "loose": true
                           }
                       ]
                    ]
                }
            }
        ]
    }
};
