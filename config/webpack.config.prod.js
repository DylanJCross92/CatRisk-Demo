var path = require('path');
var paths = require('../config/paths');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var homepagePath = require(paths.appPackageJson).homepage;
var homepagePathname = homepagePath ? url.parse(homepagePath).pathname : '/';
var publicPath = ensureSlash(homepagePathname, true);
var publicUrl = ensureSlash(homepagePathname, false);
var getClientEnvironment = require('./env');
// Get environment variables to inject into our app.
var env = getClientEnvironment(publicUrl);

function ensureSlash(path, needsSlash) {
    var hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    } else if (!hasSlash && needsSlash) {
        return path + '/';
    } else {
        return path;
    }
}

module.exports = {
    entry: [
        require.resolve('./polyfills'),
        paths.appIndexJs
    ],
    output: {
        path: paths.appBuild,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: publicPath
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
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtml
        }),
        new webpack.DefinePlugin(env),
    ]
};