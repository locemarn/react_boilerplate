const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: path.join(__dirname, 'src', 'index'),

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin({
      title: 'App',
      publicPath: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.cass$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
