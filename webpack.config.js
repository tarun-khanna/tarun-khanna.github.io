/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(css|js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: '[name].[hash:8].[ext]'
        },
      }
    ],
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!server.js'], }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      hash: true
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs', '*'],
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 3000,
  },
  mode: process.env.NODE_ENV || 'development',
};

module.exports = config;
