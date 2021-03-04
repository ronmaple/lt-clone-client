// TODO: place in tools/ along with webpack.config (current folder path issue)
// https://github.com/Browsersync/recipes/tree/master/recipes/webpack.babel

const browserSync = require('browser-sync').create() // TODO delete this in favour of browser-sync-webpack-plugin?
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const stripAnsi = require('strip-ansi')

const webpackConfig = require('./webpack.config')
const bundler = webpack(webpackConfig)

/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.plugin('done', function (stats) {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return browserSync.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stripAnsi(stats.toString()),
      timeout: 100000,
    })
  }
  browserSync.reload()
})

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
  server: 'app',
  open: false,
  logFileChanges: false,
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    }),
  ],
  plugins: ['bs-fullscreen-message'],
  files: ['app/css/*.css', 'app/*.html'],
})
