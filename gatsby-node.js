
exports.modifyWebpackConfig = function(config, stage) {

  config.loader('file-loader', function(cfg) {
    cfg.test = /\.(txt)$/
    cfg.loader = 'file-loader?name=[name]&context=./public'
    return cfg
  })
  return config
}