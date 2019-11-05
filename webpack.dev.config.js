const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const WebpackShellPlugin = require( 'webpack-shell-plugin' );

module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/index.jsx'
    ]
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    publicPath: '/',
    filename: '[name].js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename:  'hot/hot-update.json'
  },
  mode: 'development',
  target: 'web',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'css-hot-loader',
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico|json)$/,
        use: [ "file-loader" ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      excludeChunks: [ 'server' ]
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
