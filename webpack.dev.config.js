var path = require( 'path' );
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var AddAssetHtmlPlugin = require( 'add-asset-html-webpack-plugin' );
var MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  mode: 'development',
  devtool: '#sourcemap',
  entry: {
    main: [
      './src/index.jsx',
      './src/Styles/style.js'
    ]
  },
  output: {
    path: path.join( __dirname, 'build' ),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join( __dirname, 'build' ),
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
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
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require ( 'autoprefixer' )
              ]
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
      filename: './index.html',
      template: './src/index.html'
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve( __dirname, './build/*.dll.js' ),
    }),
    new MiniCSSExtractPlugin({
      filename: './[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: [ 'popper.js', 'default' ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [ '.jsx', '.js' ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
};
