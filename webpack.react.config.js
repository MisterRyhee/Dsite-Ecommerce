var path = require('path');
var webpack = require('webpack');

var webpackCOnfig = {
  context: __dirname,
  entry: {
    vendor: [ 'react', 'react-router' ],
  },
  devtool: '#source-map',
  mode: 'development',
  output: {
    path: path.join( __dirname, 'build' ),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join( __dirname, 'build', '[name]-manifest.json' ),
      name: '[name]_[hash]',
    }),
  ],
};
