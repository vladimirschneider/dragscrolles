import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default merge.smart(baseConfig, {
  devtool: 'source-map',

  mode: 'production',

  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'commonjs-module'
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ]
  }
});