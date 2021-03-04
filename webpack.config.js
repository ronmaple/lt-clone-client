// TODO Delete webpack-dev-server
const Dotenv = require('dotenv-webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const env = process.env.NODE_ENV

const webpackConfig = {
  entry: ['./src/main.js'],

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
    new Dotenv({
      // https://stackoverflow.com/questions/50655808/how-to-read-different-env-files-depending-on-production-or-development-mode
      path: `./.env.${env || 'development'}`,
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
      server: { baseDir: ['dist'] },
    }),
  ],
}

module.exports = webpackConfig
