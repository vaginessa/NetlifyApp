var ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.modifyWebpackConfig = function(config, stage) {
  if(stage === 'build-html') {
    config.removeLoader('css')
    config.loader('css', function(cfg) {
      cfg.test = /\.css$/
      cfg.loader = ExtractTextPlugin.extract('css?minimize')
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: true }])
  }
  return config
}