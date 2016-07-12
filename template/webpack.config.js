var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: [
        './src/main.js',
        './src/styles/index.scss',
    ],
    output:  {
        path: __dirname + '/static',
        filename: 'scripts/[name].js',
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!postcss!sass!text-transform'),
        }],
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './src/styles')]
    },
    postcss: [
        autoprefixer({
            browsers: [
                'last 3 versions',
            ],
        }),
    ],
    plugins: [
        new ExtractTextPlugin('styles/[name].css', {
            allChunks: true,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                dead_code: true,
            },
        })
    ],
};
