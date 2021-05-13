// TODO Delete webpack-dev-server
require
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const env = process.env.NODE_ENV
const isDev = env === 'development'

const webpackConfig = {
  entry: ['./src/main.js'],

  devtool: isDev ? 'source-map' : false,

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
  // TODO: output
  module: {
    rules: [
      // js loader
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      // css-loader, mainly for src/styles/fonts.css global
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // TODO consider webp-loader for .webp files (images)
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        PORT: JSON.stringify(process.env.PORT),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),

        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
        AUTH0_AUDIENCE: JSON.stringify(process.env.AUTH0_AUDIENCE),
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // https://github.com/Va1/browser-sync-webpack-plugin
    new BrowserSyncPlugin({
      // browse to http://localhost:8080/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: process.env.PORT || 8080,
      middleware: [
        // Middleware option: https://browsersync.io/docs/options#option-middleware
        // TODO: add webpack-dev-middleware for HMR
        // To be able to GET routes without hitting server
        // Combines middleware option, and connect-history-api (couldn't find guide to do this)
        // https://www.npmjs.com/package/connect-history-api-fallback
        require('connect-history-api-fallback')(),
      ],
      server: { baseDir: ['dist'] },
    }),
  ],
}

module.exports = webpackConfig
