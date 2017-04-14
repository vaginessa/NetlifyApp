var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

exports.postBuild = function(pages, callback) {

    new CopyWebpackPlugin([
          
            // {output}/file/without/extension
            {
                from: '/assets/redirects.txt',
                to: 'public/_redirects',
                toType: 'file'
            },
            
          
        ], {
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        })
    
  callback()
}
