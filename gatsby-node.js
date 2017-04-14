var CopyWebpackPlugin = require('copy-webpack-plugin');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.modifyWebpackConfig = function(config, stage) {
  if(stage === 'build-html') {

    config.plugin(CopyWebpackPlugin([
          
            // {output}/file/without/extension
            {
                from: 'asset/_redirects',
                to: 'public/',
                toType: '_redirects'
            },
            
          
        ], {
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    )
  }
  return config
}