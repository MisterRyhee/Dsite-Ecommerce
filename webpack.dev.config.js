var path = require( 'path' );
var webpack = require('webpack');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
  entry: {
    main: [
      './src/index.jsx',
      './src/Styles/style.js'
    ]
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join( __dirname, 'dist' ),
    compress: true,
    port: 3000
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
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: './[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [ '.jsx', '.js' ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  mode: 'development',
};
