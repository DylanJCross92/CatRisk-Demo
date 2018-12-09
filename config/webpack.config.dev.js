var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var getClientEnvironment = require('./env');

var publicUrl = '';
// Get environment variables to inject into our app.
var env = getClientEnvironment(publicUrl);

module.exports = {
    entry: {
        'app': [
            'react-hot-loader/patch',
            'react-dev-utils/webpackHotDevClient',
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(svg|png|gif|jpe?g|swf)$/, use: "file-loader" }
        ],
        loaders: [

        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new webpack.DefinePlugin(env),
    ]
};