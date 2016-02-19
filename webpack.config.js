// webpack.config.js
'use strict';

var PurescriptPlugin = require('purescript-webpack-plugin');

var src = [
  'bower_components/purescript-*/src/**/*.purs',
  'src/**/*.purs'
];

var ffi = [
  'bower_components/purescript-*/src/**/*.js',
  'src/**/*FFI.js'
];

var modulesDirectories = [
  'node_modules',
  'bower_components',
  'src'
];

var config
  = { entry: {
        inner: './entry'
      }
    , output: { path: __dirname + '/dist'
              , pathinfo: true
              , filename: 'bundle.js'
              }
    , module: {
        loaders: [
          { test: /\.purs$/
          , loader: 'purs-loader'
          }
        ]
      }
    , resolve: { modulesDirectories: modulesDirectories }
    , plugins: [ new PurescriptPlugin({src: src, ffi: ffi}) ]
    };

module.exports = config;

