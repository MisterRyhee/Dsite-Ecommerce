const path = require( 'path' );
const webpack = require( 'webpack' );
const nodeExternals = require( 'webpack-node-externals' );

module.exports = ( env, argv ) => {
  const ASSET_PATH = process.env.ASSET_PATH || '/';

  return({
    entry: {
      server: './svr/server-prod.js';
    },
    output: {
      path: path.join( __dirname, 'dist' ),
      publicPath: ASSET_PATH,
      filename: '[name].js'
    },
    mode: 'none',
    target: 'web',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [
      nodeExternals()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify( ASSET_PATH )
      })
    ]
  });
};
