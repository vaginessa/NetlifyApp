var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.modifyWebpackConfig = function(config, stage) {
     context: path.join(__dirname, 'app'),
    devServer: {
        // This is required for older versions of webpack-dev-server
        // if you use absolute 'to' paths. The path should be an
        // absolute path to your build destination.
        outputPath: path.join(__dirname, 'build')
    }
  if(stage === 'build-html') {
    
    return cfg
    config.plugin( new CopyWebpackPlugin([
          
            // {output}/file/without/extension
            {
                from: './_redirects.re',
                to: 'public/_redirects',
                toType: 'file'
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
