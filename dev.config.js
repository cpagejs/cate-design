const path = require("path");
const fs = require('fs');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry :　path.resolve('./example/index.js'),
    output : {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.html'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve(__dirname, "./src"),
          'common': path.resolve(__dirname, "./src/common"),
          'components': path.resolve(__dirname, "./src/components"),
          'config': path.resolve(__dirname, "./src/config"),
        }
      },
    plugins : [
      new HtmlWebpackPlugin({
          filename : 'index.html',
          template : './example/index.html',
          inject: true,
          minify : {
              removeComments : true,
              collapseWhitespace : true
          }
      }),
      new ExtractTextPlugin({
        filename: 'styles.css',
        allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(
        ['build/',],
        {
            root: __dirname,
            verbose:  false, 
            dry:      false
        }
      ),
      new webpack.DefinePlugin({
        'process.env': '"development"'
      }),
      new VueLoaderPlugin()
    ],
    stats: "errors-only",
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
            options: {
              loaders: {
                  css: ExtractTextPlugin.extract({
                      use: ['css-loader'],
                      fallback: 'vue-style-loader' 
                  }),
                  scss: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'vue-style-loader' 
                  }),
              },
              sourceMap:true
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, "./src"),
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
            use: 'url-loader?limit=50000',  
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: { importLoaders: 1 }
              },
              'postcss-loader'
            ]
          }
        ]
    }
}



