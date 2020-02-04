const path = require("path");
const fs = require('fs');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolve } = require("path");
function r(path){
  return resolve(__dirname, path);
}

let entrys = {};
fs.readdirSync( r('./src/components') )
    .forEach(file=>{
        const ds = fs.statSync(r('./src/components/' + file));
        if(ds.isDirectory()) {
            entrys[file] = r('./src/components/' + file + '/index.js')
        }
    })
Object.assign(entrys, {
  index: './src/index.js'
});

module.exports = {
    mode: 'production',
    entry : entrys,
    output : {
        library: 'ui-vue-h5',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        filename: 'js/[name]/index.js'
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
        new ExtractTextPlugin({
          filename: 'css/[name].css',
          allChunks: true
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(
          ['dist/',],
          {
              root: __dirname,
              verbose:  false,
              dry:      false
          }
        ),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new VueLoaderPlugin()
    ],
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
            use: ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ])
          }
        ]
    }
}
